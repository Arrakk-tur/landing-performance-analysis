'use client';

import { useEffect, useState } from 'react';

type ProductPriceProps = {
  fullPrice: number;
  finalPrice: number;
};

/**
 * Isolated client price module. Simulates a database price-match latency and
 * renders a fixed-size skeleton while loading so the swap produces zero CLS.
 */
export function ProductPrice({ fullPrice, finalPrice }: ProductPriceProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div aria-live="polite" className="mt-auto flex h-7 items-end gap-2">
      {loading ? (
        <div aria-hidden="true" className="flex h-full w-full items-center">
          <span className="h-6 w-28 animate-pulse rounded-md bg-slate-200" />
        </div>
      ) : (
        <>
          <span className="text-lg font-extrabold leading-none text-(--color-maudau-red)">
            {finalPrice} ₴
          </span>
          <span className="text-sm leading-none text-slate-400 line-through">
            {fullPrice} ₴
          </span>
        </>
      )}
    </div>
  );
}
