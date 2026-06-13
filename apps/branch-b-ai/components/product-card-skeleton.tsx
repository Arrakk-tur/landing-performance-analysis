export function ProductCardSkeleton() {
  return (
    <div
      data-testid="productItemSkeleton"
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      {/* Image block — matches aspect-square of the real card */}
      <div className="aspect-square w-full animate-pulse bg-slate-200" />

      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Title: three lines matching line-clamp-3 leading-relaxed text-sm */}
        <div className="flex flex-col gap-1.5">
          <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-11/12 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="mt-auto flex flex-col gap-2">
          {/* Price row */}
          <div className="h-8 w-24 animate-pulse rounded bg-slate-200" />
          {/* Bonus row */}
          <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
        </div>

        {/* CTA button */}
        <div className="mt-1 h-10 w-full animate-pulse rounded-xl bg-slate-200" />
      </div>
    </div>
  );
}
