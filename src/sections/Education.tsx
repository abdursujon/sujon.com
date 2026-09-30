import { CaretRightIcon } from '@phosphor-icons/react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { educationEntries } from '../data/education'

export function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-6 pb-25">
      <SectionLabel>Education</SectionLabel>

      <ul className="mt-6 flex flex-col gap-4">
        {educationEntries.map(({ slug, institution, qualification, period, logoUrl, href, academicResults }) => (
          <li
            key={slug}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-3xl border border-ink/5 bg-card px-6 py-6 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] transition-colors hover:border-accent/40 md:px-8"
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={institution}
                className="size-14 shrink-0 rounded-full object-contain"
              />
            ) : (
              <div className="size-14 shrink-0 rounded-full bg-ink/5" />
            )}

            <div className="min-w-0 flex-1 basis-40">
              <h3 className="font-display text-2xl text-ink">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-accent"
                  >
                    {institution}
                    <CaretRightIcon size={16} />
                  </a>
                ) : (
                  institution
                )}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-[0.12em] text-ink-muted">
                {qualification}
              </p>
              {academicResults && academicResults.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {academicResults.map((academicResult) => (
                    <li
                      key={academicResult}
                      className="rounded-full bg-ink/5 px-3 py-1 text-xs uppercase tracking-[0.12em] text-ink-muted dark:bg-white/10"
                    >
                      {academicResult}
                    </li>
                  ))}
                </ul>
              )}
              
            </div>

            <span className="order-last w-full text-sm uppercase tracking-[0.18em] text-ink-muted md:order-none md:w-auto md:shrink-0 md:text-right">
              {period}
            </span>

            <span className="hidden size-[34px] shrink-0 md:block" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  )
}