import Image from 'next/image';
import { categories } from '../lib/products';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const allProducts = categories.flatMap((c) => c.products);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Товари для пікніку та грилю - Maudau',
  description:
    'Кращі ціни на мангали, решітки, соуси та аксесуари для пікніку. Знайдіть все необхідне для пікніку в одному місці. Швидка доставка.',
  url: 'https://maudau.com.ua/promo/picnic',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: allProducts.length,
    itemListElement: allProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        image: product.image,
        url: product.url,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'UAH',
          price: product.finalPrice,
          highPrice: product.oldPrice,
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  },
};

export default function PicnicPromoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-maudau-gray">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="https://maudau.com.ua/"
            aria-label="Maudau головна сторінка"
            className="text-maudau-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald rounded"
          >
            <svg aria-hidden="true" focusable="false" width="122" height="32">
              <use href="/sprite.svg#logo-icon" />
            </svg>
          </a>
          <a
            href="https://maudau.com.ua/promo"
            className="px-5 py-2 text-sm font-bold text-maudau-emerald border-2 border-maudau-emerald rounded-full hover:bg-emerald-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-emerald"
          >
            Всі акції
          </a>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center">
        <section className="w-full max-w-[1280px] px-4 py-10 lg:py-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start gap-6">
            <h1 className="text-4xl lg:text-5xl font-black leading-tight text-maudau-dark text-balance">
              Все для пікніку та грилю{' '}
              <span className="text-maudau-emerald">зі знижкою</span>
            </h1>
            <p className="text-lg font-medium text-slate-500 max-w-lg text-pretty">
              Мангали, шашлики, соуси та аксесуари для ідеального відпочинку на
              природі. Зберіть свій набір за найкращими цінами.
            </p>
            <a
              href="#category-grill-tools"
              className="mt-2 px-10 py-4 bg-maudau-emerald text-white text-lg font-bold rounded-2xl shadow-lg hover:bg-maudau-emerald-hover transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maudau-emerald focus-visible:ring-offset-2"
            >
              Обрати товари
            </a>
          </div>
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[3/2] rounded-[32px] overflow-hidden shadow-xl bg-white">
              <Image
                src="/sun.webp"
                alt="Відпочинок на природі без зайвих турбот"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <div className="w-full max-w-[1280px] px-4 pb-16 lg:pb-24 flex flex-col gap-16">
          {categories.map((category, categoryIndex) => (
            <section
              key={category.id}
              id={`category-${category.id}`}
              aria-labelledby={`heading-${category.id}`}
              className="flex flex-col gap-8 scroll-mt-24"
            >
              <div className="pl-5 border-l-4 border-maudau-emerald">
                <h2
                  id={`heading-${category.id}`}
                  className="text-2xl lg:text-3xl font-black text-maudau-dark"
                >
                  {category.title}
                </h2>
              </div>

              <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    priority={categoryIndex === 0 && productIndex < 3}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
