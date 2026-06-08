export default function Footer() {
  return (
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
              <svg aria-hidden="true" focusable="false" width="122" height="32">
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
                <p className="text-slate-400 font-medium">Пн-Нд: 9:00-21:00</p>
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
    </footer>
  );
}
