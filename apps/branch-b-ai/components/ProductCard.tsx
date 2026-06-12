import Image from 'next/image';
import type { Product } from '../lib/products';

interface Props {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: Props) {
  const {
    id,
    title,
    url,
    image,
    oldPrice,
    finalPrice,
    discount,
    bonus,
    badge,
    trustBadge,
  } = product;

  const productUrl = `${url}?utm_source=picnic_landing&utm_campaign=summer_promo_2026`;

  return (
    <article
      data-testid="productItem"
      className="group relative flex flex-col h-full bg-white rounded-3xl p-6 border border-slate-100 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-lg"
    >
      <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden flex items-center justify-center">
        {badge && (
          <span className="absolute top-2 left-2 z-10 px-3 py-1 bg-maudau-blue text-white text-xs font-bold rounded-full">
            {badge}
          </span>
        )}
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
      </div>

      <h3 className="text-base font-bold text-maudau-dark line-clamp-2 mb-4 min-h-[3rem]">
        <a
          href={productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="before:absolute before:inset-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maudau-emerald focus-visible:ring-offset-2 rounded-sm"
        >
          {title}
        </a>
      </h3>

      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-400 line-through">
            {oldPrice} ₴
          </span>
          <span className="px-2 py-1 bg-maudau-red text-white text-xs font-bold rounded-full">
            -{discount}%
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="text-3xl font-black text-maudau-dark">
            {finalPrice} ₴
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-slate-500">
            <svg
              aria-hidden="true"
              focusable="false"
              width="20"
              height="20"
              className="shrink-0"
            >
              <use href="/sprite.svg#vr-id-icon" />
            </svg>
            +{bonus}
          </span>
        </div>

        {trustBadge && (
          <svg
            aria-label="National Cashback"
            role="img"
            width="70"
            height="18"
            className="mt-1"
          >
            <use href="/sprite.svg#national-cashback-icon" />
          </svg>
        )}

        <span className="mt-2 w-full py-3.5 rounded-2xl text-base font-bold text-center bg-maudau-emerald text-white transition-colors group-hover:bg-maudau-emerald-hover">
          Детальніше
        </span>
      </div>
    </article>
  );
}
