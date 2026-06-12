import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title:
    'Товари для пікніку та грилю: купити все для відпочинку зі знижкою - Maudau',
  description:
    'Кращі ціни на мангали, решітки, соуси та аксесуари для пікніку. Знайдіть все необхідне для пікніку в одному місці. Швидка доставка.',
  metadataBase: new URL('https://maudau.com.ua'),
  alternates: {
    canonical: '/promo/picnic',
  },
  openGraph: {
    title: 'Товари для пікніку та грилю - Maudau',
    description: 'Знижки на все необхідне для ідеального пікніку.',
    url: 'https://maudau.com.ua/promo/picnic',
    siteName: 'Maudau',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="bg-maudau-gray">
      <body>{children}</body>
    </html>
  );
}
