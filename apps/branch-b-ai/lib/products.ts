export interface Product {
  id: number;
  title: string;
  url: string;
  image: string;
  oldPrice: number;
  finalPrice: number;
  discount: number;
  bonus: number;
  badge?: string;
  trustBadge?: boolean;
}

export interface Category {
  id: string;
  title: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'grill-tools',
    title: 'Приладдя до мангалу',
    products: [
      {
        id: 1,
        title: 'Гриль-барбекю розкладний Market Union 44х30х7,5 см',
        url: 'https://maudau.com.ua/product/manhal-rozkladnyi-35-27-20-cm-sm',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/ac/0e/85/ac0e85f1-15f4-45f7-9ac1-1d6a2dd0749e',
        oldPrice: 399,
        finalPrice: 323,
        discount: 19,
        bonus: 3.23,
      },
      {
        id: 2,
        title:
          'Набір шампурів Скаут 6 штук у чохлі Scout шампуров 60х1х1 мм kuh0009630',
        url: 'https://maudau.com.ua/product/nabir-shampuriv-skaut-6-shtuk-u-chokhli-scout-shampurov-60kh1kh1-mm-kuh0009630',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/a5/90/ee/a590eea407753f0c7d067b74ba67d2f5.jpg',
        oldPrice: 499,
        finalPrice: 400,
        discount: 20,
        bonus: 4,
        badge: 'Новинка',
      },
      {
        id: 3,
        title: 'Решітка для гриля Gold in Sea 31 х 24 x 5.5 см',
        url: 'https://maudau.com.ua/product/reshitka-dlia-hrylia-31kh24x5-5-cm-sm',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/8d/00/cc/8d00ccad-d602-4b1f-a1a2-8eafb1683c00',
        oldPrice: 302,
        finalPrice: 230,
        discount: 24,
        bonus: 2.3,
      },
    ],
  },
  {
    id: 'for-kebab',
    title: 'Для шашлику',
    products: [
      {
        id: 4,
        title: 'Шашлик зі свинячої шинки в маринаді «Чорний часник», 1 кг',
        url: 'https://maudau.com.ua/product/shashlyk-zi-svyniachoi-shynky-v-marynadi-chornyi-chasnyk-1-kh',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/3e/5d/a4/3e5da4751106baa5c9ba0ad6e6ff934f.jpg',
        oldPrice: 442,
        finalPrice: 369,
        discount: 17,
        bonus: 3.69,
      },
      {
        id: 5,
        title: 'Шашлик “Курячий” у вишневому соусі, 1 кг',
        url: 'https://maudau.com.ua/product/shashlyk-kuriachyi-u-vyshnevomu-sousi-1-kh',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/9e/d6/28/9ed6285fd75f20c4b3558ac96a8c8a7b.jpg',
        oldPrice: 395,
        finalPrice: 329,
        discount: 17,
        bonus: 3.29,
      },
      {
        id: 6,
        title: 'Ковбаски “Курячі з кропом”, 1 кг',
        url: 'https://maudau.com.ua/product/kovbasky-kuriachi-z-kropom-1-kh',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/86/c0/c0/86c0c0c28228c41d298e4ad4ce8db691.jpg',
        oldPrice: 253,
        finalPrice: 199,
        discount: 21,
        bonus: 1.99,
      },
    ],
  },
  {
    id: 'to-kebab',
    title: 'До шашлику',
    products: [
      {
        id: 7,
        title: 'Соус Торчин Сацебелі 200 г (548669)',
        url: 'https://maudau.com.ua/product/sous-torchyn-satsebeli-200-h-548669',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/17/71/a3/1771a35b-765a-4c2f-a770-b85138ecbd67.jpg',
        oldPrice: 47,
        finalPrice: 34,
        discount: 28,
        bonus: 0.34,
        trustBadge: true,
      },
      {
        id: 8,
        title: "Приправа Kamis до м'яса на грилі 25 г",
        url: 'https://maudau.com.ua/product/pryprava-hryl-do-miasa-kamis-25h',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/b5/36/a5/b536a5bbcdf7c99e720081041eec0c74.jpg',
        oldPrice: 33,
        finalPrice: 27,
        discount: 18,
        bonus: 0.27,
      },
      {
        id: 9,
        title: 'Лаваш тонкий Київхліб Персидський 230 г',
        url: 'https://maudau.com.ua/product/lavash-kyivkhlib-persydskyi-tonkyi',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/67/4f/61/674f61607677ee62481e95b8762b77e0.png',
        oldPrice: 46,
        finalPrice: 43,
        discount: 7,
        bonus: 0.43,
      },
    ],
  },
  {
    id: 'comfort',
    title: 'Комфорт на природі',
    products: [
      {
        id: 10,
        title: 'Термосумка Time Eco TE-3010SX 10 л зелена',
        url: 'https://maudau.com.ua/product/izotermichna-sumka-time-eco-te-3010sx-10-l-zelena',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/d8/74/ca/d874ca36452248c6cfdc57b4269ce324.png',
        oldPrice: 439,
        finalPrice: 409,
        discount: 7,
        bonus: 4.09,
      },
      {
        id: 11,
        title: 'Акумулятор холоду Mazhura, 1000 г, білий (mz500942)',
        url: 'https://maudau.com.ua/product/akumuliator-kholodu-mazhura-1000-h-bilyi-mz500942',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/15/ee/a0/15eea0c8-b539-41df-8359-835402e1b3d1.png',
        oldPrice: 151,
        finalPrice: 135,
        discount: 11,
        bonus: 1.35,
      },
      {
        id: 12,
        title: 'Крісло розкладне Yiwu в асортименті',
        url: 'https://maudau.com.ua/product/stilets-rozkladnyi-50-50-80-cm-sm',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/16/ce/1e/16ce1e23-5be4-4b8f-8772-d3653776c608',
        oldPrice: 449,
        finalPrice: 349,
        discount: 22,
        bonus: 3.49,
      },
    ],
  },
  {
    id: 'serving',
    title: 'Зручне сервірування',
    products: [
      {
        id: 13,
        title: 'Тарілка одноразова паперова з ламінацією Ø 185 мм біла 100 шт.',
        url: 'https://maudau.com.ua/product/odnorazova-paperova-bila-tarilka-z-laminatsiieiu-185-mm-100-sht-up',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/83/ef/a2/83efa2d0a6b580f7df2836072a31b6d0.jpg',
        oldPrice: 170,
        finalPrice: 128,
        discount: 25,
        bonus: 1.28,
      },
      {
        id: 14,
        title: 'Виделка пластикова одноразова чорна 100 шт.',
        url: 'https://maudau.com.ua/product/vydelka-plastykova-chorna-odnorazova-100-sht-up',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/fd/b2/f8/fdb2f80ab856a97a358c3c4478548d9d.jpg',
        oldPrice: 134,
        finalPrice: 101,
        discount: 25,
        bonus: 1.01,
      },
      {
        id: 15,
        title: 'Склянка одноразова Крафтова Маестро 250 мл 50 шт.',
        url: 'https://maudau.com.ua/product/odnorazovyi-kraftovyi-stakan-obiem-250-ml-maestro-50-sht-up',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/02/c9/47/02c9474ccb1c436b48a2782d56753dbe.jpg',
        oldPrice: 136,
        finalPrice: 102,
        discount: 25,
        bonus: 1.02,
      },
    ],
  },
];
