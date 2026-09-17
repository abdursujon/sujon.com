import { useEffect, useState } from 'react'
import { SectionLabel } from '../components/ui/SectionLabel'
import type { ContributionYear } from '../types/contribution'

const CONTRIBUTION_LEVEL_COLOR_VARS = [
  'var(--color-contribution-0)',
  'var(--color-contribution-1)',
  'var(--color-contribution-2)',
  'var(--color-contribution-3)',
  'var(--color-contribution-4)',
]

const CONTRIBUTION_LEVEL_BY_NAME: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

interface RawContributionYear {
  year: number
  totalContributions: number
  weeks: Array<{
    contributionDays: Array<{
      date: string
      contributionCount: number
      contributionLevel: string
    }>
  }>
}

function normaliseContributionYears(rawYears: RawContributionYear[]): ContributionYear[] {
  return rawYears.map((rawYear) => ({
    year: rawYear.year,
    totalContributions: rawYear.totalContributions,
    weeks: rawYear.weeks.map((week) => ({
      days: week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: CONTRIBUTION_LEVEL_BY_NAME[day.contributionLevel] ?? 0,
      })),
    })),
  }))
}

function buildMonthLabelPerWeek(contributionYear: ContributionYear | undefined): string[] {
  if (!contributionYear) return []
  let previousMonthIndex = -1
  return contributionYear.weeks.map((week) => {
    const firstDayOfWeek = new Date(week.days[0].date)
    const monthIndex = firstDayOfWeek.getMonth()
    if (monthIndex === previousMonthIndex) return ''
    previousMonthIndex = monthIndex
    return firstDayOfWeek.toLocaleString('en-US', { month: 'short' })
  })
}

function countLeadingEmptyDayCells(contributionYear: ContributionYear | undefined): number {
  if (!contributionYear) return 0
  return new Date(contributionYear.weeks[0].days[0].date).getUTCDay()
}

export function Github() {
  const [contributionYears, setContributionYears] = useState<ContributionYear[]>([])
  const [hasLoadFailed, setHasLoadFailed] = useState(false)

  useEffect(() => {
    async function fetchGithubContributionYears() {
      try {
        const response = await fetch('/api/contributions')
        if (!response.ok) {
          setHasLoadFailed(true)
          return
        }

        const rawYears: RawContributionYear[] = await response.json()
        setContributionYears(normaliseContributionYears(rawYears))
      } catch {
        setHasLoadFailed(true)
      }
    }

    fetchGithubContributionYears()
  }, [])

  const latestContributionYear = contributionYears[0]
  const monthLabelPerWeek = buildMonthLabelPerWeek(latestContributionYear)
   const leadingEmptyDayCells = countLeadingEmptyDayCells(latestContributionYear)
  const weekColumnsTemplate = {
    gridTemplateColumns: `repeat(${monthLabelPerWeek.length}, minmax(0, 1fr))`,
  }

  return (
    <section id="github" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col items-center text-center">
        <SectionLabel>GitHub</SectionLabel>
        <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">
          Github Contribution
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto]">
        <div className="rounded-3xl border border-ink/5 bg-white/70 p-6 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] dark:bg-white/5">
          {hasLoadFailed ? (
            <p className="text-sm text-ink-muted">Couldn&apos;t load contributions.</p>
          ) : (
             <div>
              <div className="grid gap-[3px]" style={weekColumnsTemplate}>
                {monthLabelPerWeek.map((monthLabel, weekIndex) => (
                  <span key={weekIndex} className="relative block h-4">
                    {monthLabel && (
                      <span className="absolute left-0 top-0 whitespace-nowrap text-[10px] tracking-wider text-ink-muted">
                        {monthLabel}
                      </span>
                    )}
                  </span>
                ))}
              </div>

               <div className="grid gap-[3px]" style={weekColumnsTemplate}>
                {latestContributionYear?.weeks.map((week, weekIndex) => (
                  <div key={week.days[0].date} className="flex flex-col gap-[3px]">
                    {weekIndex === 0 &&
                      Array.from({ length: leadingEmptyDayCells }, (_unused, emptyCellIndex) => (
                        <div key={`empty-${emptyCellIndex}`} className="aspect-square w-full" />
                      ))}
                    {week.days.map((day) => (
                      <div
                        key={day.date}
                        className="aspect-square w-full rounded-[2px]"
                        style={{ background: CONTRIBUTION_LEVEL_COLOR_VARS[day.level] }}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-3xl border border-ink/5 bg-white/70 p-8 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] lg:w-72 dark:bg-white/5">
          {contributionYears.map(({ year, totalContributions }, yearIndex) => (
            <div key={year}>
              {yearIndex > 0 && (
                <div className="mb-4 h-px w-full bg-linear-to-r from-transparent via-ink/15 to-transparent" />
              )}
              <p className="font-display text-3xl text-ink">{totalContributions}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-muted">
                Contributions in {year}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/abdursujon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-ink"
        >
          github.com/abdursujon · updated daily
        </a>
      </div>
    </section>
  )
}