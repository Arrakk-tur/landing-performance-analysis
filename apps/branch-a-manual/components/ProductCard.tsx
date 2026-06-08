'use client';

import Image from 'next/image';
import { sendGAEvent } from '@next/third-parties/google';
import { Product } from '../lib/api';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const isOutOfStock = product.offer.availability_status === 'out_of_stock';

  const utmParams = new URLSearchParams({
    utm_source: 'picnic_landing',
    utm_campaign: 'summer_promo_2026',
  });
  const productUrl = `https://maudau.com.ua/product/${product.slug}?${utmParams.toString()}`;

  const handleClick = () => {
    sendGAEvent('event', 'outbound_click', {
      event_category: 'ecommerce',
      event_label: product.title,
      item_id: product.id,
    });
  };

  const price = Math.round(product.offer.price / 100);
  const oldPrice = product.offer.old_price
    ? Math.round(product.offer.old_price / 100)
    : null;
  const discount = oldPrice ? Math.round(100 - (price / oldPrice) * 100) : null;

  return (
    <article
      className={`group relative flex flex-col h-full bg-white rounded-3xl p-6 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-slate-100 transition-shadow hover:shadow-lg ${isOutOfStock ? 'opacity-50' : ''}`}
    >
      {/* Зображення */}
      <div className="relative w-full aspect-square mb-6 bg-white rounded-2xl overflow-hidden flex items-center justify-center">
        <Image
          src={product.main_photo_sized_urls.md}
          alt={product.title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          loading="lazy"
        />
      </div>

      {/* Заголовок */}
      <h3 className="text-lg font-bold text-slate-800 line-clamp-2 mb-4 h-[50px]">
        {isOutOfStock ? (
          <span className="text-slate-400">{product.title}</span>
        ) : (
          <a
            href={productUrl}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="before:absolute before:inset-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maudau-emerald focus-visible:ring-offset-2 rounded-sm"
          >
            {product.title}
          </a>
        )}
      </h3>

      {/* Ціни та Кнопка */}
      <div className="mt-auto flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-base text-slate-400 line-through">
            {oldPrice ? `${oldPrice} ₴` : ''}
          </span>
          {discount && (
            <span className="px-2 py-1 bg-maudau-red text-white text-xs font-bold rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        <div className="text-3xl font-black text-maudau-dark">{price} ₴</div>

        <button
          tabIndex={-1}
          aria-hidden="true"
          className={`w-full py-4 rounded-2xl text-base font-bold transition-colors ${
            isOutOfStock
              ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
              : 'bg-maudau-emerald text-white group-hover:bg-emerald-700'
          }`}
        >
          {isOutOfStock ? 'Немає в наявності' : 'Детальніше'}
        </button>
      </div>
    </article>
  );
}
