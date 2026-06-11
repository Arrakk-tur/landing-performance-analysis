export const promoCategories = [
  {
    id: 'grill-tools',
    title: 'Приладдя до мангалу',
    slugs: [
      'manhal-rozkladnyi-35-27-20-cm-sm',
      'nabir-shampuriv-skaut-6-shtuk-u-chokhli-scout-shampurov-60kh1kh1-mm-kuh0009630',
      'reshitka-dlia-hrylia-31kh24x5-5-cm-sm',
    ],
  },
  {
    id: 'for-kebab',
    title: 'Для шашлику',
    slugs: [
      'shashlyk-zi-svyniachoi-shynky-v-marynadi-chornyi-chasnyk-1-kh',
      'shashlyk-kuriachyi-u-vyshnevomu-sousi-1-kh',
      'kovbasky-kuriachi-z-kropom-1-kh',
    ],
  },
  {
    id: 'to-kebab',
    title: 'До шашлику',
    slugs: [
      'sous-torchyn-satsebeli-200-h-548669',
      'pryprava-hryl-do-miasa-kamis-25h',
      'lavash-kyivkhlib-persydskyi-tonkyi',
    ],
  },
  {
    id: 'comfort',
    title: 'Комфорт на природі',
    slugs: [
      'izotermichna-sumka-time-eco-te-3010sx-10-l-zelena',
      'akumuliator-kholodu-mazhura-1000-h-bilyi-mz500942',
      'stilets-rozkladnyi-50-50-80-cm-sm',
    ],
  },
  {
    id: 'serving',
    title: 'Зручне сервірування',
    slugs: [
      'odnorazova-paperova-bila-tarilka-z-laminatsiieiu-185-mm-100-sht-up',
      'vydelka-plastykova-chorna-odnorazova-100-sht-up',
      'odnorazovyi-kraftovyi-stakan-obiem-250-ml-maestro-50-sht-up',
    ],
  },
];

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  discount: number | null;
  isOutOfStock: boolean;
  main_photo_sized_urls: { md: string };
}

export async function fetchProduct(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(
      `https://backend.prod.maudau.click/v1/user/products/${slug}`,
      {
        headers: {
          'x-app-name': 'storefront_web',
          'x-app-version': '1.24.13',
        },
        // ISR кешування (stale-while-revalidate) на 1 годину
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error(`Помилка API для ${slug}: ${res.status}`);
      return null;
    }

    const data = await res.json();

    // Перенесена математика обчислення цін
    const price = Math.round(data.offer.price / 100);
    const oldPrice = data.offer.old_price
      ? Math.round(data.offer.old_price / 100)
      : null;
    const discount = oldPrice
      ? Math.round(100 - (price / oldPrice) * 100)
      : null;

    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      price,
      oldPrice,
      discount,
      isOutOfStock: data.offer.availability_status === 'out_of_stock',
      main_photo_sized_urls: data.main_photo_sized_urls,
    };
  } catch (error) {
    console.error(`Помилка мережі для товару ${slug}:`, error);
    return null;
  }
}
