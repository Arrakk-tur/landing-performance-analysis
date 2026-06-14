import { catalog } from '@/lib/catalog';

export function StructuredData() {
  const allProducts = catalog.flatMap((category) => category.products);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://maudau.com.ua/#picnic-promo',
        name: 'Товари для пікніку та грилю: купити все для відпочинку зі знижкою - Maudau',
        description:
          'Кращі ціни на мангали, решітки, соуси та аксесуари для пікніку. Знайдіть все необхідне для пікніку в одному місці. Швидка доставка.',
        inLanguage: 'uk-UA',
      },
      {
        '@type': 'ItemList',
        name: 'Товари для пікніку та грилю',
        numberOfItems: allProducts.length,
        itemListElement: allProducts.map((product, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Product',
            name: product.name,
            image: product.image || 'https://maudau.com.ua/placeholder.svg',
            url: product.link,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'UAH',
              price: product.finalPrice,
              availability: 'https://schema.org/InStock',
              url: product.link,
            },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
