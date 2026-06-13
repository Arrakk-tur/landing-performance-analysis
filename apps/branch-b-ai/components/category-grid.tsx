'use client';

import { useEffect, useState } from 'react';
import type { Product } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { ProductCardSkeleton } from '@/components/product-card-skeleton';

export function CategoryGrid({ products }: { products: Product[] }) {
  const [loadedProducts, setLoadedProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    // Model a database query round-trip before mapping data into the viewport.
    const timer = setTimeout(() => {
      setLoadedProducts(products);
    }, 1000);

    return () => clearTimeout(timer);
  }, [products]);

  const isLoading = loadedProducts === null;

  return (
    <div className="@container">
      <div
        aria-live="polite"
        aria-busy={isLoading}
        className="grid grid-cols-1 gap-6 @md:grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4"
      >
        {isLoading
          ? products.map((product) => (
              <ProductCardSkeleton key={`skeleton-${product.link}`} />
            ))
          : loadedProducts.map((product) => (
              <ProductCard key={product.link} product={product} />
            ))}
      </div>
    </div>
  );
}
