export type Product = {
  name: string;
  link: string;
  image: string;
  fullPrice: number;
  finalPrice: number;
  discount: string;
  badge?: string;
};

export type Category = {
  id: string;
  title: string;
  products: Product[];
};

export const catalog: Category[] = [
  {
    id: 'category-1',
    title: 'Приладдя до мангалу',
    products: [
      {
        name: 'Гриль-барбекю розкладний Market Union 44х30х7,5 см',
        link: 'https://maudau.com.ua/product/manhal-rozkladnyi-35-27-20-cm-sm',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/ac/0e/85/ac0e85f1-15f4-45f7-9ac1-1d6a2dd0749e',
        fullPrice: 399,
        finalPrice: 323,
        discount: '-19%',
      },
      {
        name: 'Набір шампурів Скаут 6 штук у чохлі Scout шампуров 60х1х1 мм kuh0009630',
        link: 'https://maudau.com.ua/product/nabir-shampuriv-skaut-6-shtuk-u-chokhli-scout-shampurov-60kh1kh1-mm-kuh0009630',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/a5/90/ee/a590eea407753f0c7d067b74ba67d2f5.jpg',
        fullPrice: 499,
        finalPrice: 400,
        discount: '-20%',
        badge: 'Новинка',
      },
      {
        name: 'Решітка для гриля Gold in Sea 31 х 24 x 5.5 см',
        link: 'https://maudau.com.ua/product/reshitka-dlia-hrylia-31kh24x5-5-cm-sm',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/8d/00/cc/8d00ccad-d602-4b1f-a1a2-8eafb1683c00',
        fullPrice: 302,
        finalPrice: 230,
        discount: '-24%',
      },
    ],
  },
  {
    id: 'category-2',
    title: 'Для шашлику',
    products: [
      {
        name: 'Шашлик зі свинячої шинки в маринаді «Чорний часник», 1 кг',
        link: 'https://maudau.com.ua/product/shashlyk-zi-svyniachoi-shynky-v-marynadi-chornyi-chasnyk-1-kh',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/3e/5d/a4/3e5da4751106baa5c9ba0ad6e6ff934f.jpg',
        fullPrice: 442,
        finalPrice: 369,
        discount: '-17%',
      },
      {
        name: 'Шашлик “Курячий” у вишневому соусі, 1 кг',
        link: 'https://maudau.com.ua/product/shashlyk-kuriachyi-u-vyshnevomu-sousi-1-kh',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/9e/d6/28/9ed6285fd75f20c4b3558ac96a8c8a7b.jpg',
        fullPrice: 395,
        finalPrice: 329,
        discount: '-17%',
      },
      {
        name: 'Ковбаски “Курячі з кропом”, 1 кг',
        link: 'https://maudau.com.ua/product/kovbasky-kuriachi-z-kropom-1-kh',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/86/c0/c0/86c0c0c28228c41d298e4ad4ce8db691.jpg',
        fullPrice: 253,
        finalPrice: 199,
        discount: '-21%',
      },
    ],
  },
  {
    id: 'category-3',
    title: 'До шашлику',
    products: [
      {
        name: 'Соус Торчин Сацебелі 200 г (548669)',
        link: 'https://maudau.com.ua/product/sous-torchyn-satsebeli-200-h-548669',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/17/71/a3/1771a35b-765a-4c2f-a770-b85138ecbd67.jpg',
        fullPrice: 47,
        finalPrice: 34,
        discount: '-28%',
        badge: 'Оплата Нацкешбек',
      },
      {
        name: "Приправа Kamis до м'яса на грилі 25 г",
        link: 'https://maudau.com.ua/product/pryprava-hryl-do-miasa-kamis-25h',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/b5/36/a5/b536a5bbcdf7c99e720081041eec0c74.jpg',
        fullPrice: 33,
        finalPrice: 27,
        discount: '-18%',
      },
      {
        name: 'Лаваш тонкий Київхліб Персидський 230 г',
        link: 'https://maudau.com.ua/product/lavash-kyivkhlib-persydskyi-tonkyi',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/67/4f/61/674f61607677ee62481e95b8762b77e0.png',
        fullPrice: 46,
        finalPrice: 43,
        discount: '-7%',
      },
    ],
  },
  {
    id: 'category-4',
    title: 'Комфорт на природі',
    products: [
      {
        name: 'Термосумка Time Eco TE-3010SX 10 л зелена',
        link: 'https://maudau.com.ua/product/izotermichna-sumka-time-eco-te-3010sx-10-l-zelena',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/d8/74/ca/d874ca36452248c6cfdc57b4269ce324.png',
        fullPrice: 439,
        finalPrice: 409,
        discount: '-7%',
      },
      {
        name: 'Акумулятор холоду Mazhura, 1000 г, білий (mz500942)',
        link: 'https://maudau.com.ua/product/akumuliator-kholodu-mazhura-1000-h-bilyi-mz500942',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/15/ee/a0/15eea0c8-b539-41df-8359-835402e1b3d1.png',
        fullPrice: 151,
        finalPrice: 135,
        discount: '-11%',
      },
      {
        name: 'Крісло розкладне Yiwu в асортименті',
        link: 'https://maudau.com.ua/product/stilets-rozkladnyi-50-50-80-cm-sm',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/16/ce/1e/16ce1e23-5be4-4b8f-8772-d3653776c608',
        fullPrice: 449,
        finalPrice: 349,
        discount: '-22%',
      },
    ],
  },
  {
    id: 'category-5',
    title: 'Зручне сервірування',
    products: [
      {
        name: 'Тарілка одноразова паперова з ламінацією Ø 185 мм біла 100 шт.',
        link: 'https://maudau.com.ua/product/odnorazova-paperova-bila-tarilka-z-laminatsiieiu-185-mm-100-sht-up',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/83/ef/a2/83efa2d0a6b580f7df2836072a31b6d0.jpg',
        fullPrice: 170,
        finalPrice: 128,
        discount: '-25%',
      },
      {
        name: 'Виделка пластикова одноразова чорна 100 шт.',
        link: 'https://maudau.com.ua/product/vydelka-plastykova-chorna-odnorazova-100-sht-up',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/fd/b2/f8/fdb2f80ab856a97a358c3c4478548d9d.jpg',
        fullPrice: 134,
        finalPrice: 101,
        discount: '-25%',
      },
      {
        name: 'Склянка одноразова Крафтова Маестро 250 мл 50 шт.',
        link: 'https://maudau.com.ua/product/odnorazovyi-kraftovyi-stakan-obiem-250-ml-maestro-50-sht-up',
        image:
          'https://image.maudau.com.ua/webp/size/md/products/02/c9/47/02c9474ccb1c436b48a2782d56753dbe.jpg',
        fullPrice: 136,
        finalPrice: 102,
        discount: '-25%',
      },
    ],
  },
];
