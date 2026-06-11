import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
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
    images: [
      {
        url: 'https://image.maudau.com.ua/size/origin/promo_campaigns/e6/66/7b/e6667b8a027d4caef5e8d07d71b84188.png',
        width: 1200,
        height: 630,
        alt: 'Відпочинок на природі без зайвих турбот',
      },
    ],
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
    <html lang="uk">
      <body>
        {children}
        <GoogleAnalytics gaId="G-test012345" />
      </body>
    </html>
  );
}
