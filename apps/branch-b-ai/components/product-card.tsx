'use client';

import Image from 'next/image';
import type { Product } from '@/lib/products';
import { handleOutboundClick } from '@/lib/analytics';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article
      data-testid="productItem"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-maudau-gray">
        <div className="absolute left-3 top-3 z-20 flex flex-col items-start gap-2">
          <span className="rounded-md bg-maudau-red px-2 py-1 text-xs font-bold leading-none text-white">
            {product.discount}
          </span>
          {product.badge && (
            <span className="rounded-md bg-maudau-blue px-2 py-1 text-xs font-semibold leading-none text-white">
              {product.badge}
            </span>
          )}
        </div>
        {product.nationalCashback && (
          <svg
            className="absolute right-3 top-3 z-20 h-5 w-auto"
            role="img"
            aria-label="Національний кешбек"
          >
            <use href="/sprite.svg#national-cashback-icon" />
          </svg>
        )}
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-sm leading-relaxed text-maudau-dark">
          <a
            href={product.link}
            rel="noopener noreferrer"
            onClick={() => handleOutboundClick(product.link, product.link)}
            className="line-clamp-3 rounded-sm after:absolute after:inset-0 after:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-maudau-blue"
          >
            {product.name}
          </a>
        </h3>

        <div className="mt-auto flex flex-col gap-2">
          <div className="flex items-end gap-2">
            <span className="text-2xl font-extrabold leading-none text-maudau-red">
              {product.finalPrice} ₴
            </span>
            <span className="pb-0.5 text-sm text-slate-400 line-through">
              {product.fullPrice} ₴
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg className="h-4 w-4 shrink-0" aria-hidden="true">
              <use href="/sprite.svg#vr-id-icon" />
            </svg>
            <span className="text-xs font-medium text-slate-500">
              <span className="sr-only">Нараховується </span>
              {'+'}
              {product.bonus} бонусів
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-1 flex w-full items-center justify-center rounded-xl bg-maudau-emerald px-4 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-maudau-emerald-hover"
        >
          Детальніше
        </div>
      </div>
    </article>
  );
}
