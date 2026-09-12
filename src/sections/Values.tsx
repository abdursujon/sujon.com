import { useState } from 'react'
import { CompassIcon } from '@phosphor-icons/react'
import { values } from '../data/values'

export function Values() {
  const [revealedValueSlugs, setRevealedValueSlugs] = useState<string[]>([])

  const toggleHiddenValueReveal = (slug: string) =>
    setRevealedValueSlugs((currentSlugs) =>
      currentSlugs.includes(slug)
        ? currentSlugs.filter((revealedSlug) => revealedSlug !== slug)
        : [...currentSlugs, slug],
    )

  return (
    <section id="values" className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="rounded-[40px] border border-ink/5 bg-white/70 p-8 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] md:p-12 dark:bg-white/5">
        <div className="flex items-center gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
            <CompassIcon size={22} />
          </span>
          <h2 className="font-display text-3xl text-ink">Values</h2>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {values.map(({ slug, label, text, isEmphasised, isHidden }) => {
            const isRevealed = revealedValueSlugs.includes(slug)

            return (
              <p
                key={slug}
                className={`text-lg leading-relaxed text-ink-muted ${isEmphasised ? 'italic' : ''}`}
              >
                <span className="font-semibold not-italic text-ink">{label}</span>
                <span className="mx-1.5 not-italic text-ink-muted/60">·</span>

                {isHidden ? (
                  <button
                    type="button"
                    onClick={() => toggleHiddenValueReveal(slug)}
                    aria-label={isRevealed ? `Hide ${label}` : `Reveal ${label}`}
                    className={`rounded-md px-2 py-0.5 align-middle transition-all duration-300 ${
                      isRevealed
                        ? 'bg-transparent'
                        : 'cursor-pointer select-none bg-ink/8 blur-[5px] hover:blur-[3px]'
                    }`}
                  >
                    {text}
                  </button>
                ) : (
                  text
                )}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}