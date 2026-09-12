import { useEffect, useState } from 'react'
import { SectionLabel } from '../components/ui/SectionLabel'
import type { ContributionWeek } from '../types/contribution'

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

const CONTRIBUTION_CALENDAR_QUERY = `
  query($user: String!) {
    user(login: $user) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }`

function buildMonthLabelPerWeek(weeks: ContributionWeek[]): string[] {
  let previousMonthIndex = -1
  return weeks.map((week) => {
    const firstDayOfWeek = new Date(week.days[0].date)
    const monthIndex = firstDayOfWeek.getMonth()
    if (monthIndex === previousMonthIndex) return ''
    previousMonthIndex = monthIndex
    return firstDayOfWeek.toLocaleString('en-US', { month: 'short' })
  })
}

export function Github() {
  const [contributionWeeks, setContributionWeeks] = useState<ContributionWeek[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [hasLoadFailed, setHasLoadFailed] = useState(false)

  const githubUsername = import.meta.env.VITE_GITHUB_USERNAME

  useEffect(() => {
    async function fetchGithubContributionCalendar() {
      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: CONTRIBUTION_CALENDAR_QUERY,
            variables: { user: githubUsername },
          }),
        })

        const payload = await response.json()
        const calendar = payload?.data?.user?.contributionsCollection?.contributionCalendar
        if (!calendar) {
          setHasLoadFailed(true)
          return
        }

        setTotalContributions(calendar.totalContributions)
        setContributionWeeks(
          calendar.weeks.map((week: { contributionDays: Array<Record<string, string | number>> }) => ({
            days: week.contributionDays.map((day) => ({
              date: String(day.date),
              count: Number(day.contributionCount),
              level: CONTRIBUTION_LEVEL_BY_NAME[String(day.contributionLevel)] ?? 0,
            })),
          })),
        )
      } catch {
        setHasLoadFailed(true)
      }
    }

    fetchGithubContributionCalendar()
  }, [githubUsername])

  const monthLabelPerWeek = buildMonthLabelPerWeek(contributionWeeks)

  return (
    <section id="github" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col items-center text-center">
        <SectionLabel>GitHub</SectionLabel>
        <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">
          What I&apos;ve been building
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto]">
        <div className="rounded-3xl border border-ink/5 bg-white/70 p-6 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] dark:bg-white/5">
          {hasLoadFailed ? (
            <p className="text-sm text-ink-muted">Couldn&apos;t load contributions.</p>
          ) : (
            <div className="overflow-x-auto">
              <div className="flex gap-[3px]">
                {monthLabelPerWeek.map((monthLabel, weekIndex) => (
                  <span
                    key={weekIndex}
                    className="w-[11px] shrink-0 whitespace-nowrap text-[10px] tracking-wider text-ink-muted"
                  >
                    {monthLabel}
                  </span>
                ))}
              </div>

              <div className="mt-2 flex gap-[3px]">
                {contributionWeeks.map((week) => (
                  <div key={week.days[0].date} className="flex shrink-0 flex-col gap-[3px]">
                    {week.days.map((day) => (
                      <div
                        key={day.date}
                        className="h-[11px] w-[11px] rounded-[2px]"
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
          <p className="font-display text-3xl text-ink">{totalContributions}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
            Contributions this year
          </p>
          <div className="h-px w-full bg-linear-to-r from-transparent via-ink/15 to-transparent" />
          <p className="text-base text-ink-muted">
            Open source contributor — mostly TypeScript, Python, and infrastructure.
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-ink"
        >
          github.com/{githubUsername} · updated daily
        </a>
      </div>
    </section>
  )
}