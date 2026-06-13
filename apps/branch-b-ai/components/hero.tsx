'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16 lg:px-8">
        <div className="flex flex-col items-start gap-5">
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-extrabold tracking-tight text-maudau-dark sm:text-4xl lg:text-5xl"
          >
            Відпочинок на природі без зайвих турбот
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-slate-600">
            Знижки на все необхідне для ідеального пікніку
          </p>
          <a
            href="#categories"
            className="inline-flex items-center justify-center rounded-xl bg-[#047857] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#064e3b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0052f6]"
          >
            Перейти до покупок
          </a>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-maudau-gray">
          <Image
            src="/sun.webp"
            alt="Сонячний літній пікнік на природі з грилем та закусками"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
