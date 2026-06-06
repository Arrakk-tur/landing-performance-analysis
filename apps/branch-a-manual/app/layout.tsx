import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  title:
    'Товари для пікніку та грилю: купити все для відпочинку зі знижкою - Maudau',
  description:
    'Кращі ціни на мангали, решітки, соуси та аксесуари для пікніку. Знайдіть все необхідне для пікніку в одному місці. Швидка доставка.',
  alternates: {
    canonical: 'https://maudau.com.ua/promo/picnic',
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
