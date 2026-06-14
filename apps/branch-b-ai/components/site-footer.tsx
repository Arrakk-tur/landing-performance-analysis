const helpLinks = [
  {
    label: 'Блог MAUDAU',
    href: 'https://journal.maudau.com.ua',
    icon: 'blog-icon',
  },
  { label: 'Доставка', href: 'https://maudau.com.ua/info/delivery' },
  { label: 'Оплата', href: 'https://maudau.com.ua/info/payment' },
  {
    label: 'Повернення та гарантія',
    href: 'https://maudau.com.ua/info/refund',
  },
  {
    label: 'Власний Рахунок',
    href: 'https://maudau.com.ua/info/vlasnij-rahunok',
  },
  { label: 'Контакти', href: 'https://maudau.com.ua/info/contacts' },
  {
    label: 'Публічна оферта',
    href: 'https://maudau.com.ua/info/public-offer',
  },
];

const socials = [
  { id: 'instagram-icon', label: 'Instagram' },
  { id: 'facebook-icon', label: 'Facebook' },
  { id: 'youtube-icon', label: 'YouTube' },
  { id: 'telegram-icon', label: 'Telegram' },
  { id: 'tiktok-icon', label: 'TikTok' },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-(--color-maudau-dark) px-6 py-12 text-white">
      <div className="mx-auto w-full max-w-7xl">
        {/* Brand vector & identity row */}
        <div className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-8">
          <svg
            className="h-8 w-30.5 text-(--color-secondary-95)"
            role="img"
            aria-label="MAUDAU"
          >
            <use href="/sprite.svg#logo-icon" />
          </svg>
          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            Все для пікніку, грилю та відпочинку на природі — за найкращими
            цінами зі швидкою доставкою по Україні.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 — Допомога */}
          <nav aria-label="Допомога">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Допомога
            </h2>
            <ul className="flex flex-col gap-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-maudau-dark) focus-visible:ring-(--color-maudau-blue)"
                  >
                    {link.icon && (
                      <svg className="h-5 w-5 shrink-0" aria-hidden="true">
                        <use href={`/sprite.svg#${link.icon}`} />
                      </svg>
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 2 — Служба підтримки */}
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Служба підтримки
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li className="flex flex-col gap-0.5">
                <span className="text-xs text-slate-400">
                  Безкоштовно з будь-яких номерів
                </span>
                <a
                  href="tel:0800758368"
                  className="rounded-sm font-semibold text-white transition-colors hover:text-(--color-secondary-95) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-maudau-dark) focus-visible:ring-(--color-maudau-blue)"
                >
                  0 800 75 83 68
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-xs text-slate-400">
                  Дзвінки згідно тарифів вашого оператора
                </span>
                <a
                  href="tel:0443558368"
                  className="rounded-sm font-semibold text-white transition-colors hover:text-(--color-secondary-95) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-maudau-dark) focus-visible:ring-(--color-maudau-blue)"
                >
                  0 44 355 83 68
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-400">Графік роботи</span>
                <p>Пн-Нд: 9:00-21:00</p>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-xs text-slate-400">Служба турботи</span>
                <a
                  href="mailto:customercare@maudau.com.ua"
                  className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-maudau-dark) focus-visible:ring-(--color-maudau-blue)"
                >
                  customercare@maudau.com.ua
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-xs text-slate-400">Прес-центр</span>
                <a
                  href="mailto:pr-team@maudau.com.ua"
                  className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-maudau-dark) focus-visible:ring-(--color-maudau-blue)"
                >
                  pr-team@maudau.com.ua
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Соціальні мережі */}
          <nav aria-label="Соціальні мережі">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Соціальні мережі
            </h2>
            <ul className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href="https://maudau.com.ua"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="block rounded-full transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-maudau-dark) focus-visible:ring-(--color-maudau-blue)"
                  >
                    <svg className="h-8 w-8" aria-hidden="true">
                      <use href={`/sprite.svg#${social.id}`} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row — legal */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-400">
          <p>© Інтернет-магазин MAUDAU 2026. Всі права захищені.</p>
          <p>Ціни актуальні на момент переходу на сайт.</p>
        </div>
      </div>
    </footer>
  );
}
