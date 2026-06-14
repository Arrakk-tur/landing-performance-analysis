'use client';

import Image from 'next/image';
import type { Product } from '@/lib/catalog';
import { ProductPrice } from '@/components/product-price';

/** Registers outbound telemetry without an inline ecommerce cart. */
function handleOutboundClick(productId: string, targetUrl: string) {
  if (typeof window === 'undefined') return;
  const w = window as typeof window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'outbound_product_click',
    productId,
    targetUrl,
  });
}

export function ProductCard({ product }: { product: Product }) {
  const isCashback = product.badge === 'Оплата Нацкешбек';
  const isNew = product.badge === 'Новинка';

  return (
    <article
      data-testid="productItem"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-(--color-maudau-gray)">
        {/* Discount badge */}
        <span className="absolute left-3 top-3 z-20 rounded-full bg-(--color-maudau-red) px-2.5 py-1 text-xs font-bold text-white">
          {product.discount}
        </span>

        {/* "Новинка" badge */}
        {isNew && (
          <span className="absolute right-3 top-3 z-20 rounded-full bg-(--color-maudau-blue) px-2.5 py-1 text-xs font-semibold text-white">
            Новинка
          </span>
        )}

        {/* National cashback program icon badge */}
        {isCashback && (
          <span className="absolute right-3 top-3 z-20 flex items-center rounded-md bg-white px-1.5 py-1 shadow-sm">
            <svg
              className="h-4 w-13.75"
              role="img"
              aria-label="Оплата Нацкешбек"
            >
              <use href="/sprite.svg#national-cashback-icon" />
            </svg>
          </span>
        )}

        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Clickable card: anchor stretches over the whole article via ::after */}
        <h3 className="line-clamp-3 min-h-15 text-sm font-medium leading-relaxed text-(--color-maudau-dark)">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleOutboundClick(product.link, product.link)}
            className="rounded-sm after:absolute after:inset-0 after:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--color-maudau-blue)"
          >
            {product.name}
          </a>
        </h3>

        <ProductPrice
          fullPrice={product.fullPrice}
          finalPrice={product.finalPrice}
        />

        {/* Non-interactive visual "Купити" affordance (div, not button/anchor) */}
        <div className="relative z-0 flex w-full items-center justify-center rounded-full bg-(--color-maudau-emerald) px-4 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-(--color-maudau-emerald-hover)">
          Детальніше
        </div>
      </div>
    </article>
  );
}
