import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { interests } from '../data/interests'

export function Interests() {
  return (
    <section id="interests" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col items-center text-center">
        <SectionLabel>Interests</SectionLabel>
        <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">
          Things I make time for
        </h2>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {interests.map(({ slug, name, IconComponent, actionLabel, href }) => (
          <li key={slug}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-start gap-5 rounded-3xl border border-ink/5 bg-white/70  p-6 md:p-8 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] transition hover:-translate-y-1 hover:border-accent/40 dark:bg-white/5"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                <IconComponent size={26} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-display text-2xl text-ink">{name}</span>
                <span className="mt-2 flex items-center gap-1.5 text-base text-ink-muted">
                  {actionLabel}
                  <ArrowUpRightIcon
                    size={16}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}