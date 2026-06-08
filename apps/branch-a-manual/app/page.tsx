import Image from 'next/image';
import { fetchProduct, promoCategories } from '../lib/api';
import ProductCard from '../components/ProductCard';

export default async function PicnicPromoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <a
              href="https://maudau.com.ua/"
              aria-label="Головна Maudau"
              className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maudau-emerald rounded"
            >
              <span className="text-3xl font-black text-maudau-emerald">
                MAUDAU
              </span>
            </a>
            <nav className="hidden lg:flex gap-8">
              {[
                { label: 'Приладдя', href: '#category-grill-tools' },
                { label: "М'ясо", href: '#category-for-kebab' },
                { label: 'Соуси', href: '#category-to-kebab' },
                { label: 'Комфорт', href: '#category-comfort' },
                { label: 'Сервірування', href: '#category-serving' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-slate-600 uppercase tracking-wider hover:text-maudau-emerald transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded px-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <a
            href="https://maudau.com.ua/promo"
            className="px-6 py-2 text-sm font-bold text-maudau-emerald border-2 border-maudau-emerald rounded-full hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maudau-emerald transition-colors"
          >
            Всі акції
          </a>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-[1536px] px-4 py-10 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col items-start gap-6">
            <div className="px-4 py-1.5 bg-orange-100 rounded-full">
              <span className="text-xs font-black text-orange-700 uppercase tracking-widest">
                Сезон пікніків 2026
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight text-maudau-dark">
              Відпочинок на природі <br />
              <span className="text-maudau-emerald">без зайвих турбот</span>
            </h1>
            <p className="text-lg lg:text-xl font-medium text-slate-500 max-w-lg">
              Зберіть свій ідеальний набір зі знижками. Ми підготували найкращі
              пропозиції для вашого комфорту.
            </p>
            <a
              href="#category-grill-tools"
              className="mt-4 px-12 py-5 bg-maudau-dark text-white text-lg font-bold rounded-2xl shadow-xl hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maudau-emerald focus-visible:ring-offset-2"
            >
              Обрати товари
            </a>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[3/2] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/sun.png"
                alt="Весняний розпродаж товарів для пікніку"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <div className="w-full max-w-[1536px] px-4 py-16 lg:py-24 flex flex-col gap-20">
          {promoCategories.map(async (category) => {
            const productsData = await Promise.all(
              category.slugs.map((slug) => fetchProduct(slug))
            );
            const validProducts = productsData.filter((p) => p !== null);

            if (validProducts.length === 0) return null;

            return (
              <section
                key={category.id}
                id={`category-${category.id}`}
                aria-labelledby={`heading-${category.id}`}
                className="flex flex-col gap-10 scroll-mt-24 lg:scroll-mt-28"
              >
                <div className="pl-6 border-l-4 border-maudau-emerald">
                  <h2
                    id={`heading-${category.id}`}
                    className="text-3xl font-black text-maudau-dark"
                  >
                    {category.title}
                  </h2>
                </div>

                <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {validProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-maudau-dark pt-16 pb-12 px-4 border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Column 1: Logo & Socials */}
            <div className="flex flex-col gap-8">
              <a
                href="https://maudau.com.ua"
                aria-label="Головна сторінка"
                className="text-maudau-emerald w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="122"
                  height="32"
                >
                  <use href="/sprite.svg#logo-icon" />
                </svg>
              </a>

              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-white">
                  Слідкуйте за нами:
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/maudau.ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="block w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="w-full h-full"
                    >
                      <use href="/sprite.svg#instagram-icon" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/maudau.ua"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="block w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="w-full h-full"
                    >
                      <use href="/sprite.svg#facebook-icon" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/channel/UCVUCik3wuHxBq9zT5G9VPzw"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="block w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="w-full h-full"
                    >
                      <use href="/sprite.svg#youtube-icon" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/maudau"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="block w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="w-full h-full"
                    >
                      <use href="/sprite.svg#telegram-icon" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@maudau_market"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="block w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="w-full h-full"
                    >
                      <use href="/sprite.svg#tiktok-icon" />
                    </svg>
                  </a>
                  <a
                    href="https://journal.maudau.com.ua"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Блог"
                    className="block w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="w-full h-full"
                    >
                      <use href="/sprite.svg#blog-icon" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Help Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-lg font-bold text-white">Допомога</h4>
              <ul className="flex flex-col gap-4 text-sm text-slate-400">
                <li>
                  <a
                    href="https://journal.maudau.com.ua"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    Блог MAUDAU
                  </a>
                </li>
                <li>
                  <a
                    href="https://maudau.com.ua/info/delivery"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="https://maudau.com.ua/info/payment"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    Оплата
                  </a>
                </li>
                <li>
                  <a
                    href="https://maudau.com.ua/info/refund"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    Повернення та гарантія
                  </a>
                </li>
                <li>
                  <a
                    href="https://maudau.com.ua/info/vlasnij-rahunok"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    Власний Рахунок
                  </a>
                </li>
                <li>
                  <a
                    href="https://maudau.com.ua/info/contacts"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    Контакти
                  </a>
                </li>
                <li>
                  <a
                    href="https://maudau.com.ua/info/public-offer"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    Публічна оферта
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Support & Contacts */}
            <div className="flex flex-col gap-6">
              <h4 className="text-lg font-bold text-white">Служба підтримки</h4>
              <div className="flex flex-col gap-5 text-sm">
                <div>
                  <a
                    href="tel:0800758368"
                    className="text-xl font-bold text-white hover:text-maudau-emerald transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    0 800 75 83 68
                  </a>
                  <p className="text-slate-500 mt-1">
                    Безкоштовно з будь-яких номерів
                  </p>
                </div>
                <div>
                  <a
                    href="tel:0443558368"
                    className="text-xl font-bold text-white hover:text-maudau-emerald transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    0 44 355 83 68
                  </a>
                  <p className="text-slate-500 mt-1">
                    Дзвінки згідно тарифів вашого оператора
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-slate-400 font-medium">
                    Пн-Нд: 9:00-21:00
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Служба турботи:</span>
                    <a
                      href="mailto:customercare@maudau.com.ua"
                      className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                    >
                      customercare@maudau.com.ua
                    </a>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Прес-центр:</span>
                    <a
                      href="mailto:pr-team@maudau.com.ua"
                      className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                    >
                      pr-team@maudau.com.ua
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col items-center text-center text-xs font-medium text-slate-500">
            <p>
              © Інтернет-магазин MAUDAU 2026. Всі права захищені. Ціни актуальні
              на момент переходу на сайт.
            </p>
          </div>
        </div>
      </footer>{' '}
    </div>
  );
}
