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
    text: 'Build it simple, then make it correct. Readable code outlives clever code.',
  },
  {
    slug: 'belief',
    label: 'Belief',
    text: 'Curiosity, consistency and shipping beat raw talent.',
  },
  {
    slug: 'ethos',
    label: 'Ethos',
    text: 'Learn by building, teach by explaining.',
  },
  {
    slug: 'goal',
    label: 'Goal',
    text: 'Build software that people actually reach for twice.',
  },
  {
    slug: 'dream-about',
    label: 'Dream About',
    text: 'Models small enough to run on the phone in your pocket, doing work that today needs a data centre.',
    isEmphasised: true,
  },
  {
    slug: 'mbti',
    label: 'MBTI',
    text: 'INTJ',
    isHidden: true,
  },
]