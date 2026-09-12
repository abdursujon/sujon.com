import type { ExperienceEntry } from '../types/experience'

export const experienceEntries: ExperienceEntry[] = [
  {
    slug: 'company-one',
    organisation: 'Company One',
    role: 'Software Engineer Intern',
    location: 'Dhaka',
    period: 'Jun. 2025 - Present',
    href: 'https://example.com',
    details: [
      'Built and shipped a feature that did X, used by N people.',
      'Cut Y latency by Z% by rewriting the W path.',
      'Worked across React, TypeScript and PostgreSQL.',
    ],
  },
  {
    slug: 'company-two',
    organisation: 'Company Two',
    role: 'Mobile Developer Intern',
    location: 'Remote',
    period: 'Jan. 2025 - May. 2025',
    href: 'https://example.com',
    details: [
      'Built and shipped a feature that did X, used by N people.',
      'Cut Y latency by Z% by rewriting the W path.',
      'Worked across React, TypeScript and PostgreSQL.',
    ],
  },
  {
    slug: 'company-three',
    organisation: 'Company Three',
    role: 'Research Assistant',
    location: 'Dhaka',
    period: 'Aug. 2024 - Dec. 2024',
    details: [
      'Built and shipped a feature that did X, used by N people.',
      'Cut Y latency by Z% by rewriting the W path.',
      'Worked across React, TypeScript and PostgreSQL.',
    ],
  },
]