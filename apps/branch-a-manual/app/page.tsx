import Image from 'next/image';
import { fetchProduct, promoCategories } from '../lib/api';
import ProductCard from '../components/ProductCard';

export default async function PicnicPromoPage() {
  return (
    <>
      <header className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto border-b border-gray-200">
        <a
          href="https://maudau.com.ua/"
          aria-label="Головна сторінка Maudau"
          className="focus-visible:ring-2 focus-visible:ring-maudau-blue focus-visible:outline-none rounded"
        >
          <span className="font-extrabold text-2xl tracking-tighter">
            MAUDAU
          </span>
        </a>
        <a
          href="https://maudau.com.ua/promo"
          className="text-sm font-bold bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-maudau-blue focus-visible:outline-none transition-colors"
        >
          Всі акції
        </a>
      </header>

      <main>
        <section className="relative w-full max-w-7xl mx-auto mt-6 mb-12 px-4">
          <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden bg-gray-800">
            <Image
              src="/sun.png"
              alt="Відпочинок на природі без зайвих турбот"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-12">
              <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">
                Відпочинок на природі без зайвих турбот
              </h1>
              <p className="text-white text-lg md:text-xl font-medium">
                Знижки на все необхідне для ідеального пікніку.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20 space-y-16">
          {promoCategories.map(async (category) => {
            const productsData = await Promise.all(
              category.slugs.map((slug) => fetchProduct(slug))
            );
            const validProducts = productsData.filter((p) => p !== null);

            if (validProducts.length === 0) return null;

            return (
              <section
                key={category.id}
                aria-labelledby={`category-heading-${category.id}`}
              >
                <h2
                  id={`category-heading-${category.id}`}
                  className="text-2xl font-extrabold mb-6 text-gray-900"
                >
                  {category.title}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {validProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
