import { useState, useId } from 'react'
import { CaretRightIcon } from '@phosphor-icons/react'
import type { ExperienceEntry } from '../../types/experience'

export function ExperienceRow({
  organisation,
  role,
  location,
  period,
  logoUrl,
  href,
  details,
}: ExperienceEntry) {
  const [areDetailsVisible, setAreDetailsVisible] = useState(false)
  const detailsRegionId = useId()
  const detailItems = details ?? []

  return (
    <li className="rounded-[40px] border border-transparent bg-white/70 px-8 py-6 shadow-[0_20px_50px_-35px_rgba(25,35,38,0.4)] transition-colors hover:border-accent/40 dark:bg-white/5">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={organisation}
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
                {organisation}
                <CaretRightIcon size={16} />
              </a>
            ) : (
              organisation
            )}
          </h3>
          <p className="mt-1 text-sm uppercase tracking-[0.12em] text-ink-muted">{role}</p>
        </div>

        <span className="order-last w-full text-sm uppercase tracking-[0.18em] text-ink-muted md:order-none md:w-auto md:shrink-0 md:text-right">
           {location} | {period}
        </span>

        {detailItems.length > 0 && (
          <button
            type="button"
            onClick={() => setAreDetailsVisible((isVisible) => !isVisible)}
            aria-expanded={areDetailsVisible}
            aria-controls={detailsRegionId}
            aria-label={`${areDetailsVisible ? 'Hide' : 'Show'} details for ${organisation}`}
            className="shrink-0 cursor-pointer rounded-full p-2 text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <CaretRightIcon
              size={18}
              className={`transition-transform duration-300 ${areDetailsVisible ? 'rotate-90' : ''}`}
            />
          </button>
        )}
      </div>

      {detailItems.length > 0 && (
        <div
          id={detailsRegionId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            areDetailsVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="mt-4 flex list-disc flex-col gap-2 border-t border-ink/5 pt-4 pl-5 text-base leading-relaxed text-ink-muted md:pl-20">
              {detailItems.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  )
}

