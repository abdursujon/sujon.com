export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionWeek {
  days: ContributionDay[]
}

export interface ContributionYear {
  year: number
  totalContributions: number
  weeks: ContributionWeek[]
}
