const helpLinks = [
  { label: 'Блог MAUDAU', href: 'https://journal.maudau.com.ua' },
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
  { label: 'Публічна оферта', href: 'https://maudau.com.ua/info/public-offer' },
];

const socials = [
  {
    label: 'Instagram',
    icon: 'instagram-icon',
    href: 'https://instagram.com/maudau.com.ua',
  },
  {
    label: 'Facebook',
    icon: 'facebook-icon',
    href: 'https://facebook.com/maudau.com.ua',
  },
  {
    label: 'YouTube',
    icon: 'youtube-icon',
    href: 'https://youtube.com/@maudau',
  },
  { label: 'Telegram', icon: 'telegram-icon', href: 'https://t.me/maudau' },
  { label: 'TikTok', icon: 'tiktok-icon', href: 'https://tiktok.com/@maudau' },
];

const paymentBadges = [
  { label: 'Apple Pay', icon: 'apple-pay-icon' },
  { label: 'Google Pay', icon: 'google-pay-icon' },
  { label: 'Visa', icon: 'visa-icon' },
  { label: 'Mastercard', icon: 'mastercard-icon' },
  { label: 'Приват24', icon: 'privat-24-icon' },
];

const focusRing =
  'rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0052f6]';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Help */}
          <nav aria-labelledby="footer-help">
            <h2
              id="footer-help"
              className="mb-4 text-sm font-bold uppercase tracking-wide text-maudau-dark"
            >
              Допомога
            </h2>
            <ul className="flex flex-col gap-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm text-slate-600 transition-colors hover:text-maudau-blue ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 2 - Support */}
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-maudau-dark">
              Служба підтримки
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-slate-600">
              <li>
                <a
                  href="tel:0800758368"
                  className={`font-semibold text-maudau-dark transition-colors hover:text-maudau-blue ${focusRing}`}
                >
                  0 800 75 83 68
                </a>
                <span className="block text-xs text-slate-500">
                  Безкоштовно по Україні
                </span>
              </li>
              <li>
                <a
                  href="tel:0443558368"
                  className={`transition-colors hover:text-maudau-blue ${focusRing}`}
                >
                  0 44 355 83 68
                </a>
              </li>
              <li>Пн-Нд: 9:00-21:00</li>
              <li>
                <a
                  href="mailto:customercare@maudau.com.ua"
                  className={`transition-colors hover:text-maudau-blue ${focusRing}`}
                >
                  customercare@maudau.com.ua
                </a>
                <span className="block text-xs text-slate-500">
                  Турбота про клієнтів
                </span>
              </li>
              <li>
                <a
                  href="mailto:pr-team@maudau.com.ua"
                  className={`transition-colors hover:text-maudau-blue ${focusRing}`}
                >
                  pr-team@maudau.com.ua
                </a>
                <span className="block text-xs text-slate-500">Прес-центр</span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Socials */}
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-maudau-dark">
              Ми в соцмережах
            </h2>
            <ul className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-maudau-dark transition-colors hover:border-maudau-blue hover:text-maudau-blue ${focusRing}`}
                  >
                    <svg className="h-5 w-5" aria-hidden="true">
                      <use href={`/sprite.svg#${social.icon}`} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Payments */}
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-maudau-dark">
              Безпечна оплата
            </h2>
            <ul className="flex flex-wrap gap-3">
              {paymentBadges.map((badge) => (
                <li
                  key={badge.label}
                  className="flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-3"
                >
                  <svg
                    className="h-5 w-auto"
                    role="img"
                    aria-label={badge.label}
                  >
                    <use href={`/sprite.svg#${badge.icon}`} />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© Інтернет-магазин MAUDAU 2026. Всі права захищені.</p>
          <p>Ціни актуальні на момент переходу на сайт.</p>
        </div>
      </div>
    </footer>
  );
}
