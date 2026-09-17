import type { Context } from '@netlify/functions'

const CONTRIBUTION_YEARS_TO_SHOW = 2

const CONTRIBUTION_CALENDAR_QUERY = `
  query($user: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $user) {
      contributionsCollection(from: $from, to: $to) {
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

function buildCalendarYearRange(year: number) {
  const startOfYear = new Date(Date.UTC(year, 0, 1))
  const endOfYear = new Date(Date.UTC(year, 11, 31, 23, 59, 59))
  const now = new Date()
  return {
    from: startOfYear.toISOString(),
    to: (endOfYear > now ? now : endOfYear).toISOString(),
  }
}

async function fetchContributionCalendarForYear(githubUsername: string, year: number) {
  const { from, to } = buildCalendarYearRange(year)

  const githubResponse = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: CONTRIBUTION_CALENDAR_QUERY,
      variables: { user: githubUsername, from, to },
    }),
  })

  const payload = await githubResponse.json()
  return payload?.data?.user?.contributionsCollection?.contributionCalendar ?? null
}

export default async function fetchGithubContributionYears(_request: Request, _context: Context) {
  const githubUsername = process.env.GITHUB_USERNAME
  if (!githubUsername) {
    return Response.json({ error: 'GITHUB_USERNAME not configured' }, { status: 500 })
  }

  const latestYear = new Date().getUTCFullYear()
  const yearsToFetch = Array.from(
    { length: CONTRIBUTION_YEARS_TO_SHOW },
    (_unused, yearOffset) => latestYear - yearOffset,
  )

  const calendarPerYear = await Promise.all(
    yearsToFetch.map((year) => fetchContributionCalendarForYear(githubUsername, year)),
  )

  if (calendarPerYear.some((calendar) => calendar === null)) {
    return Response.json({ error: 'contributions unavailable' }, { status: 502 })
  }

  const contributionYears = yearsToFetch.map((year, yearIndex) => ({
    year,
    totalContributions: calendarPerYear[yearIndex].totalContributions,
    weeks: calendarPerYear[yearIndex].weeks,
  }))

  return Response.json(contributionYears, {
    headers: { 'Cache-Control': 'public, max-age=0, s-maxage=3600' },
  })
}

export const config = { path: '/api/contributions' }