export interface ValueEntry {
  slug: string
  label: string
  text: string
  isEmphasised?: boolean
  isHidden?: boolean
}

export const values: ValueEntry[] = [
  {
    slug: 'principles',
    label: 'Principles',
    text: 'Pursue interest, start simple, and be consistent.',
  },
  {
    slug: 'belief',
    label: 'Belief',
    text: 'AMC: Accept what I cannot control > Master what I can > Consistency.',
  },
  {
    slug: 'ethos',
    label: 'Ethos',
    text: 'Start by thinking, learn by building, influence by helping.',
  },
  {
    slug: 'goal',
    label: 'Goal',
    text: 'Research new ideas to come up with better solutions for future generations.',
  },
  {
    slug: 'dream-about',
    label: 'Dream About',
    text: 'No physical work required to generate income, complete automation that enables humanity to dedicate their lives to the pursuit of knowledge, education, sports, and innovation.',
    isEmphasised: true,
  }
]