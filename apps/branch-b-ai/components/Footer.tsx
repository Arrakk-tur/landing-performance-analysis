export default function Footer() {
  return (
    <footer className="w-full bg-maudau-dark pt-14 pb-10 px-4 mt-auto">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-6">
            <a
              href="https://maudau.com.ua/"
              aria-label="Maudau головна сторінка"
              className="text-maudau-emerald w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
            >
              <svg aria-hidden="true" focusable="false" width="122" height="32">
                <use href="/sprite.svg#logo-icon" />
              </svg>
            </a>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">
                Слідкуйте за нами:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    id: 'instagram-icon',
                    href: 'https://www.instagram.com/maudau.ua/',
                    label: 'Instagram',
                  },
                  {
                    id: 'facebook-icon',
                    href: 'https://www.facebook.com/maudau.ua',
                    label: 'Facebook',
                  },
                  {
                    id: 'youtube-icon',
                    href: 'https://youtube.com/channel/UCVUCik3wuHxBq9zT5G9VPzw',
                    label: 'YouTube',
                  },
                  {
                    id: 'telegram-icon',
                    href: 'https://t.me/maudau',
                    label: 'Telegram',
                  },
                  {
                    id: 'tiktok-icon',
                    href: 'https://www.tiktok.com/@maudau_market',
                    label: 'TikTok',
                  },
                ].map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="block w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="w-full h-full"
                    >
                      <use href={`/sprite.svg#${s.id}`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-lg font-bold text-white">Допомога</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              {[
                {
                  label: 'Доставка',
                  href: 'https://maudau.com.ua/info/delivery',
                },
                { label: 'Оплата', href: 'https://maudau.com.ua/info/payment' },
                {
                  label: 'Повернення та гарантія',
                  href: 'https://maudau.com.ua/info/refund',
                },
                {
                  label: 'Контакти',
                  href: 'https://maudau.com.ua/info/contacts',
                },
                {
                  label: 'Публічна оферта',
                  href: 'https://maudau.com.ua/info/public-offer',
                },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-lg font-bold text-white">Служба підтримки</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <a
                  href="tel:0800758368"
                  className="text-xl font-bold text-white hover:text-maudau-emerald transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
                >
                  0 800 75 83 68
                </a>
                <p className="text-slate-400 mt-1">
                  Безкоштовно з будь-яких номерів
                </p>
              </div>
              <p className="text-slate-400 font-medium pt-2 border-t border-slate-800">
                Пн-Нд: 9:00-21:00
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 text-center text-xs font-medium text-slate-400">
          <p>
            © Інтернет-магазин MAUDAU 2026. Всі права захищені. Ціни актуальні
            на момент переходу на сайт.
          </p>
        </div>
      </div>
    </footer>
  );
}
