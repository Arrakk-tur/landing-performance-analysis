// Автоматизований скрипт порівняльного аудиту якості веб-інтерфейсів

const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

// Конфігурація досліджуваних адрес (URL розгорнутих версій на Vercel)
const CONFIG = {
  appId: 'conversion-landing-opt',
  branchA: 'https://picnic-promo-manual.vercel.app/', // Гілка А - Ручна версія
  branchB: 'https://picnic-promo-ai.vercel.app/', // Гілка Б - ШІ-генерація
  outputPath: path.join(__dirname, 'experiment_results.json'),
  repeats: 3, // Кількість повторень тесту для виведення середнього значення
};

// Функція для запуску Lighthouse CLI через системне середовище
function runLighthouse(url) {
  console.log(`[Lighthouse] Запуск аудиту для: ${url}`);

  // Тимчасовий файл для збереження сирого звіту
  const tempOutputPath = path.join(__dirname, 'temp_lh.json');

  // Команда запуску з суворим обмеженням CPU та мережі для мобільних пристроїв
  const cmd =
    `npx lighthouse ${url} ` +
    `--output=json ` +
    `--output-path=${tempOutputPath} ` +
    `--chrome-flags="--headless --disable-gpu --no-sandbox" ` +
    `--throttling.cpuSlowdownMultiplier=4 ` +
    `--throttling-method=provided ` +
    `--only-categories=performance,accessibility,seo`;

  try {
    execSync(cmd, { stdio: 'ignore' });
    const rawData = fs.readFileSync(tempOutputPath, 'utf8');
    const parsed = JSON.parse(rawData);

    // Видаляємо тимчасовий файл
    fs.unlinkSync(tempOutputPath);

    // Повертаємо лише ключові метрики (значення від 0 до 100)
    return {
      performance: Math.round(parsed.categories.performance.score * 100),
      accessibility: Math.round(parsed.categories.accessibility.score * 100),
      seo: Math.round(parsed.categories.seo.score * 100),
      fcp: parsed.audits['first-contentful-paint'].numericValue, // у мілісекундах
      lcp: parsed.audits['largest-contentful-paint'].numericValue, // у мілісекундах
      cls: parsed.audits['cumulative-layout-shift'].numericValue, // коефіцієнт зсуву
    };
  } catch (error) {
    console.error(
      `Помилка під час виконання Lighthouse для ${url}:`,
      error.message
    );
    return null;
  }
}

// Функція для запуску Axe CLI для глибокого аналізу відповідності WCAG 2.2
function runAxe(url) {
  console.log(`[Axe DevTools] Глибокий аналіз DOM для: ${url}`);

  // Використовуємо тільки ім'я файлу (Axe збереже його в корені проекту)
  const tempFileName = `temp_axe_${Date.now()}.json`;
  const tempFullPath = path.join(process.cwd(), tempFileName);

  const cmd = `npx axe ${url} --save "${tempFileName}"`;

  try {
    try {
      execSync(cmd, {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      });
    } catch (execError) {
      // Axe повертає exit code 1, якщо знайдено порушення.
      // Перевіряємо, чи з'явився файл результатів.
      if (!fs.existsSync(tempFullPath)) {
        throw execError;
      }
    }

    // Читаємо файл з кореневої директорії
    const rawData = fs.readFileSync(tempFullPath, 'utf8');
    const parsed = JSON.parse(rawData);

    // Видаляємо тимчасовий файл
    if (fs.existsSync(tempFullPath)) {
      fs.unlinkSync(tempFullPath);
    }

    const violations = parsed[0]?.violations || [];

    let critical = 0;
    let serious = 0;
    let moderate = 0;
    let minor = 0;

    violations.forEach((v) => {
      const count = v.nodes.length;
      if (v.impact === 'critical') critical += count;
      else if (v.impact === 'serious') serious += count;
      else if (v.impact === 'moderate') moderate += count;
      else if (v.impact === 'minor') minor += count;
    });

    return {
      totalViolations: violations.length,
      critical,
      serious,
      moderate,
      minor,
    };
  } catch (error) {
    console.error(`Помилка під час виконання Axe для ${url}:`, error.message);
    if (error.stderr) {
      console.error(`Деталі (stderr):\n`, error.stderr);
    }
    if (fs.existsSync(tempFullPath)) {
      fs.unlinkSync(tempFullPath);
    }
    return null;
  }
}

// Основний керуючий алгоритм експерименту
async function main() {
  console.log('=== ЗАПУСК АВТОМАТИЗОВАНОГО ПОРІВНЯЛЬНОГО ЕКСПЕРИМЕНТУ ===');

  const results = {
    metadata: {
      timestamp: new Date().toISOString(),
      appId: CONFIG.appId,
      repeats: CONFIG.repeats,
    },
    branchA: { url: CONFIG.branchA, lighthouse: [], axe: null },
    branchB: { url: CONFIG.branchB, lighthouse: [], axe: null },
  };

  // 1. Проведення серії тестів Lighthouse для Гілки А (агрегація для уникнення девіацій)
  for (let i = 0; i < CONFIG.repeats; i++) {
    console.log(`\n--- Раунд ${i + 1} з ${CONFIG.repeats} ---`);
    const lhA = runLighthouse(CONFIG.branchA);
    if (lhA) results.branchA.lighthouse.push(lhA);

    const lhB = runLighthouse(CONFIG.branchB);
    if (lhB) results.branchB.lighthouse.push(lhB);
  }

  // 2. Одноразовий глибокий аналіз DOM структури через Axe CLI
  console.log('\n--- Запуск статичного аналізу доступності коду ---');
  results.branchA.axe = runAxe(CONFIG.branchA);
  results.branchB.axe = runAxe(CONFIG.branchB);

  // 3. Математична обробка та усереднення результатів
  const averageLighthouse = (dataset) => {
    if (dataset.length === 0) return null;
    const sum = dataset.reduce((acc, curr) => ({
      performance: acc.performance + curr.performance,
      accessibility: acc.accessibility + curr.accessibility,
      seo: acc.seo + curr.seo,
      fcp: acc.fcp + curr.fcp,
      lcp: acc.lcp + curr.lcp,
      cls: acc.cls + curr.cls,
    }));

    const count = dataset.length;
    return {
      performance: Math.round(sum.performance / count),
      accessibility: Math.round(sum.accessibility / count),
      seo: Math.round(sum.seo / count),
      fcp: parseFloat((sum.fcp / count).toFixed(2)),
      lcp: parseFloat((sum.lcp / count).toFixed(2)),
      cls: parseFloat((sum.cls / count).toFixed(4)),
    };
  };

  const avgA = averageLighthouse(results.branchA.lighthouse);
  const avgB = averageLighthouse(results.branchB.lighthouse);

  // 4. Обчислення дельти показників якості (Delta Q)
  const delta = {
    performance: avgB.performance - avgA.performance,
    accessibility: avgB.accessibility - avgA.accessibility,
    seo: avgB.seo - avgA.seo,
    lcp_ms_reduction: avgA.lcp - avgB.lcp,
  };

  const finalReport = {
    metadata: results.metadata,
    averages: {
      branchA: avgA,
      branchB: avgB,
    },
    axeAnalysis: {
      branchA: results.branchA.axe,
      branchB: results.branchB.axe,
    },
    calculatedDeltas: delta,
  };

  // Збереження результатів у структурований JSON файл
  fs.writeFileSync(
    CONFIG.outputPath,
    JSON.stringify(finalReport, null, 2),
    'utf8'
  );
  console.log(
    `\n[Успіх] Експеримент завершено. Звіт збережено до: ${CONFIG.outputPath}`
  );

  // Виведення консольного резюме експерименту
  console.log('\n================ РЕЗЮМЕ ЕКСПЕРИМЕНТУ ================');
  console.log(`Метрика       | Гілка А (Ручна) | Гілка Б (ШІ v0) | Дельта`);
  console.log(`----------------------------------------------------------`);
  console.log(
    `Performance   | ${avgA.performance} балів       | ${avgB.performance} балів       | ${delta.performance >= 0 ? '+' : ''}${delta.performance}`
  );
  console.log(
    `Accessibility | ${avgA.accessibility} балів       | ${avgB.accessibility} балів       | ${delta.accessibility >= 0 ? '+' : ''}${delta.accessibility}`
  );
  console.log(
    `SEO           | ${avgA.seo} балів       | ${avgB.seo} балів       | ${delta.seo >= 0 ? '+' : ''}${delta.seo}`
  );
  console.log(
    `LCP (Швидкість)| ${avgA.lcp} ms       | ${avgB.lcp} ms       | ${delta.lcp_ms_reduction} ms (зменшення)`
  );
  console.log(`==========================================================`);
}

main();
