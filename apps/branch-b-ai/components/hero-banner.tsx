import Image from 'next/image';

export function HeroBanner() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-7xl px-4 pt-6 md:px-6"
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-(--color-maudau-gray)">
        {/* Z-pattern split canvas: copy left, image right */}
        <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-12">
          {/* Left column — headline, pitch, CTA */}
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-(--color-maudau-blue) px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Сезон пікніків
            </span>
            <h1
              id="hero-heading"
              className="text-balance text-3xl font-extrabold leading-tight text-(--color-maudau-dark) md:text-5xl"
            >
              Відпочинок на природі без зайвих турбот
            </h1>
            <p className="max-w-md text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
              Знижки на все необхідне для ідеального пікніку
            </p>
            <a
              href="#category-1"
              className="inline-flex w-fit items-center justify-center rounded-full bg-(--color-maudau-emerald) px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-(--color-maudau-emerald-hover) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--color-maudau-blue)"
            >
              Обрати товари зі знижкою
            </a>
          </div>

          {/* Right column — hero image */}
          <div className="relative order-first aspect-4/3 overflow-hidden rounded-2xl md:order-0">
            <Image
              src="/sun.webp"
              alt="Товари для пікніку та грилю зі знижкою"
              fill
              priority={true}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
