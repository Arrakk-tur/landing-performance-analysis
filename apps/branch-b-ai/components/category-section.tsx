import type { Category } from '@/lib/catalog';
import { ProductCard } from '@/components/product-card';

export function CategorySection({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className="scroll-mt-24"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <h2
            id={`${category.id}-title`}
            className="text-balance text-xl font-bold text-maudau-dark md:text-2xl"
          >
            {category.title}
          </h2>
        </div>
      </div>

      <div className="@container">
        <div className="grid grid-cols-1 gap-6 @md:grid-cols-2 @lg:grid-cols-3">
          {category.products.map((product) => (
            <ProductCard key={product.link} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
