export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="https://maudau.com.ua/"
          aria-label="Maudau"
          className="rounded-sm text-maudau-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0052f6]"
        >
          <svg
            viewBox="0 0 122 32"
            className="h-7 w-auto"
            role="img"
            aria-label="Maudau"
          >
            <use href="/sprite.svg#logo-icon" />
          </svg>
        </a>

        <a
          href="https://maudau.com.ua/"
          className="rounded-sm text-sm font-semibold text-maudau-blue transition-colors hover:text-maudau-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0052f6]"
        >
          Всі акції
        </a>
      </div>
    </header>
  );
}
