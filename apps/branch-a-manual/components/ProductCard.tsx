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
      className={`relative flex flex-col h-full bg-white rounded-lg p-4 shadow-sm border border-gray-100 ${isOutOfStock ? 'opacity-50' : ''}`}
    >
      {isOutOfStock && (
        <div className="absolute top-2 left-2 z-10 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
          Немає в наявності
        </div>
      )}

      <div className="relative w-full aspect-square mb-4">
        <Image
          src={product.main_photo_sized_urls.md}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 25vw"
          loading="lazy"
        />
      </div>

      <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-3 mb-2 flex-grow">
        {isOutOfStock ? (
          <span className="text-gray-500">{product.title}</span>
        ) : (
          <a
            href={productUrl}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="before:absolute before:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maudau-blue focus-visible:ring-offset-4 rounded-sm"
          >
            {product.title}
          </a>
        )}
      </h3>

      <div className="flex items-center gap-1 mb-4" aria-hidden="true">
        <span className="text-yellow-400 text-sm">★</span>
        <span className="text-xs text-gray-500">
          {product.rating} ({product.reviews_count})
        </span>
      </div>

      <div className="mt-auto">
        {oldPrice && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm text-gray-500 line-through">
              {oldPrice} ₴
            </span>
            <span className="text-xs font-bold text-white bg-maudau-red px-2 py-0.5 rounded-full">
              -{discount}%
            </span>
          </div>
        )}
        <div className="text-lg font-extrabold text-gray-900">{price} ₴</div>
      </div>

      <button
        tabIndex={-1}
        aria-hidden="true"
        className={`mt-4 w-full py-2.5 rounded text-sm font-extrabold transition-colors ${
          isOutOfStock
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-green-100 text-green-800 group-hover:bg-green-200'
        }`}
      >
        Детальніше
      </button>
    </article>
  );
}
