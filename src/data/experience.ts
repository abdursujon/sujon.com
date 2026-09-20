import type { ExperienceEntry } from '../types/experience'

export const experienceEntries: ExperienceEntry[] = [
  {
    slug: 'company-one',
    organisation: 'University of Salford HackCamp',
    role: 'Scrum Master and Software Developer',
    location: 'Manchester, UK',
    period: 'Dec 2024 - Jan 2026',
    logoUrl: 'https://www.google.com/s2/favicons?domain=salford.ac.uk&sz=128',
    href: 'https://blogs.salford.ac.uk/salford-giving/2025/02/20/hackcamp-2025-inspiring-future-tech-leaders-through-real-world-challenges-and-industry-collaboration/',
    details: [
      'Acted as Scrum master and developed a full-stack software solution as part of a team of seven for BCS Manchester that helps students find a placement.',
      'Implemented software development life cycle (SDLC) procedures and collected user requirements while directing team organisation and Agile methodologies using Jira.',
      'Created secure login systems tailored for different user types, including students, employers, career staff, and administrators',
      'Developed the administrative and career staff dashboards and integrated databases for each user.',
      'Designed the full website UI on Figma and built the front end for the home page, article page, admin, and career dashboard.',
      'Introduced Git branching strategies for source code management and team collaboration.'
    ],
  },
  {
    slug: 'company-two',
    organisation: 'Tortilla',
    role: 'Team Member',
    location: 'Manchester, UK',
    period: 'Mar 2024 - Dec 2025',
    logoUrl: 'https://www.google.com/s2/favicons?domain=tortilla.co.uk&sz=128',
    href: 'https://www.tortilla.co.uk/',
    details: [
      'Provided customer service in a busy restaurant, serving 500+ per day',
      'Awarded a skill competency assessment and progress review certificate from the company.',
      'Recognised for punctuality and reliability, including assisting colleagues by covering their shifts in urgent circumstances.',
    ],
  },
  {
    slug: 'company-three',
    organisation: 'Subway',
    role: 'Team Leader',
    location: 'Chelmsford, UK',
    period: 'Sept 2022- Feb 2024',
    href: 'https://restaurants.subway.com/united-kingdom/en/chelmsford/11-bishop-hall-lane',
    logoUrl: 'https://www.google.com/s2/favicons?domain=subway.com/en-gb&sz=128',
    details: [
      'Organised and maintained a clean working environment as a team, improving overall workplace satisfaction for colleagues',
      'Collaborated with management to handle inventory and place supply orders, reducing workload for management.',
      'Supervised a team of 10, achieving outstanding customer service standards.',
      'Trained new employees, enabling quick learning and engagement.'
    ],
  }
]