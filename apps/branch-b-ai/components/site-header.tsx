import { catalog } from '@/lib/catalog';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 md:px-6">
        {/* Logo */}
        <a
          href="https://maudau.com.ua/"
          aria-label="Maudau — головна"
          className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--color-maudau-blue)"
        >
          <svg
            className="h-8 w-30.5 text-(--color-primary-500)"
            aria-hidden="true"
          >
            <use href="/sprite.svg#logo-icon" />
          </svg>
        </a>

        {/* Category navigation */}
        <nav
          aria-label="Категорії товарів"
          className="hidden justify-center lg:flex"
        >
          <ul className="flex items-center gap-1">
            {catalog.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="rounded-full px-3 py-2 text-sm font-medium text-(--color-maudau-dark) transition-colors hover:bg-primary-50 hover:text-(--color-primary-700) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--color-maudau-blue)"
                >
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Secondary action */}
        <a
          href="#category-1"
          className="justify-self-end rounded-md text-sm font-semibold text-(--color-primary-600) underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--color-maudau-blue)"
        >
          Всі акції
        </a>
      </div>
    </header>
  );
}
