import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { interests } from '../data/interests'

export function Interests() {
  return (
    <section id="interests" className="mx-auto w-full max-w-6xl px-6 pb-25">
      <div className="flex flex-col items-center text-center">
        <SectionLabel>Interests</SectionLabel>
        <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">
          Things I make time for
        </h2>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {interests.map(({ slug, name, IconComponent, actionLabel, href, platformLabel, tintColor }) => (
          <li key={slug}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--interest-tint': tintColor } as React.CSSProperties}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/5 bg-card p-6 md:p-8 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] transition hover:-translate-y-1 hover:border-(--interest-tint)/40"
            >
              <span
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-(--interest-tint)/15 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <IconComponent
                size={140}
                weight="thin"
                className="pointer-events-none absolute -right-6 -bottom-8 text-(--interest-tint) opacity-10 transition duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:opacity-20"
                aria-hidden="true"
              />

              <span className="relative flex size-14 items-center justify-center rounded-2xl bg-(--interest-tint)/15 text-(--interest-tint) transition-transform duration-300 group-hover:scale-110">
                <IconComponent size={28} weight="duotone" />
              </span>

              <span className="relative mt-6 block font-display text-3xl text-ink">{name}</span>
              <span className="relative mt-2 block max-w-sm text-base leading-relaxed text-ink-muted">
                {actionLabel}
              </span>

              <span className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-chip px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors group-hover:text-(--interest-tint)">
                {platformLabel}
                <ArrowUpRightIcon
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}