import { catalog } from '@/lib/catalog';
import { SiteHeader } from '@/components/site-header';
import { HeroBanner } from '@/components/hero-banner';
import { CategorySection } from '@/components/category-section';
import { SiteFooter } from '@/components/site-footer';
import { StructuredData } from '@/components/structured-data';

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <StructuredData />
      <SiteHeader />

      <main>
        <HeroBanner />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-10 md:px-6 md:py-14">
          {catalog.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
