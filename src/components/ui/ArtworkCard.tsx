import type { Artwork } from '../../types/artwork'

export function ArtworkCard({ title, medium, year, imageUrl }: Artwork) {
  return (
    <figure className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-ink/5 bg-white/70 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] transition-colors hover:border-accent/40 dark:bg-white/5">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full transition-transform duration-500 ease-out hover:scale-[1.04]"
        />
      </div>

      <figcaption className="flex items-baseline justify-between gap-4 px-6 py-5">
        <span className="font-display text-xl text-ink">{title}</span>
        <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-ink-muted">
          {medium} · {year}
        </span>
      </figcaption>
    </figure>
  )
}