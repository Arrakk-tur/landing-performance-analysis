import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/hero';
import { CategoryGrid } from '@/components/category-grid';
import { categories } from '@/lib/products';

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-zа-яіїєґ0-9]+/gi, '-');
}

function StructuredData() {
  const allProducts = categories.flatMap((c) => c.products);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Товари для пікніку та грилю: купити все для відпочинку зі знижкою - Maudau',
    description:
      'Кращі ціни на мангали, решітки, соуси та аксесуари для пікніку. Знайдіть все необхідне для пікніку в одному місці. Швидка доставка.',
    url: 'https://maudau.com.ua/',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allProducts.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          image: product.image,
          url: product.link,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'UAH',
            price: product.finalPrice,
            highPrice: product.fullPrice,
            availability: 'https://schema.org/InStock',
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <Hero />

      <main
        id="categories"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      >
        <div className="mb-10 max-w-3xl">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-maudau-dark sm:text-3xl">
            Все для пікніку та грилю зі знижкою
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-slate-600">
            Кращі ціни на мангали, решітки, соуси та аксесуари для пікніку.
            Знайдіть все необхідне для відпочинку на природі в одному місці та
            зі швидкою доставкою.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {categories.map((category) => (
            <section
              key={category.title}
              aria-labelledby={slugify(category.title)}
            >
              <h2
                id={slugify(category.title)}
                className="mb-5 text-2xl font-bold tracking-tight text-maudau-dark"
              >
                {category.title}
              </h2>
              <CategoryGrid products={category.products} />
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
