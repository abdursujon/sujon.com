import { GithubLogoIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react'
import type { Project } from '../types/project'
import { contactDestinations } from './socialLinks'

export const projects: Project[] = [
  {
    slug: 'project-one',
    imageUrl: '/projects/project1.png',
    title: 'Final Year Project',
    period: 'Sept 2026 - Present',
    tools:["Python", "Pytorch", "etc"],
    description: 'Description to be edited',
    links: [
      { label: 'Private Repository', href: '', IconComponent: GithubLogoIcon },
      {
        label: 'Contact me for code',
        href: `mailto:${contactDestinations.emailAddress}?subject=Final Year Project code`,
        IconComponent: EnvelopeSimpleIcon,
      },
    ],
  }, 
  {
    slug: 'project-two',
    imageUrl: '/projects/project2.png',
    title: 'Find A Placement',
    period: 'University of Salford HackCamp, Dec 2026 - Jan 2026',
    tools:["JavaScript", "PHP", "SQLite", "MVC", "SCRUM"],
    description: 'Web-based placement matching system developed for BCS Manchester to increase undergraduate placement uptake by matching university students with employers offering year-long industrial placements.',
    links: [
      { label: 'Github', href: 'https://github.com/Salford-Hack-Camp-G39/BCS-Student-Placement-Application.git', IconComponent: GithubLogoIcon },
      {
        label: 'View Demo', href: 'https://youtube.com'
      },
    ],
  }, 
  {
    slug: 'project-three',
    imageUrl: '/projects/project1.png',
    title: 'PetWatch',
    period: 'Sept 2026 - Present',
    tools:["JavaScript", "PHP", "MariaDB", "MVC"],
    description: 'Web-based placement matching system developed for BCS Manchester to increase undergraduate placement uptake by matching university students with employers offering year-long industrial placements.',
    links: [
      { label: 'Github', href: 'https://github.com/Salford-Hack-Camp-G39/BCS-Student-Placement-Application.git', IconComponent: GithubLogoIcon },
      {
        label: 'Launch', href: 'https://youtube.com'
      },
    ],
  }, 
  {
    slug: 'project-four',
    imageUrl: '/projects/project4.png',
    title: 'Analytics Engine',
    period: 'Sept 2026 - Present',
    tools:["Java", "JUnit", "MockMVC", "Spring Boot", "AWS", "Docker", "React", "TypeScript"],
    description: 'Web-based placement matching system developed for BCS Manchester to increase undergraduate placement uptake by matching university students with employers offering year-long industrial placements.',
    links: [
      { label: 'Github', href: 'https://github.com/Salford-Hack-Camp-G39/BCS-Student-Placement-Application.git', IconComponent: GithubLogoIcon },
      {
        label: 'View Demo', href: 'https://youtube.com'
      },
    ],
  }, 
  {
    slug: 'project-five',
    imageUrl: '/projects/project5.png',
    title: 'Zorp The Solar Alien',
    period: 'Sept 2026 - Present',
    tools:["Java", "JavaFX", "Design Patterns"],
    description: 'Web-based placement matching system developed for BCS Manchester to increase undergraduate placement uptake by matching university students with employers offering year-long industrial placements.',
    links: [
      { label: 'Github', href: 'https://github.com/Salford-Hack-Camp-G39/BCS-Student-Placement-Application.git', IconComponent: GithubLogoIcon },
      {
        label: 'View Demo', href: 'https://youtube.com'
      },
    ],
  }, {
    slug: 'project-seven',
    imageUrl: '/projects/project.png',
    title: 'Mirror Metrics',
    period: 'Sept 2026 - Present',
    tools:["Python", "Matplotlib", "Pyplot", "Pandas"],
    description: '',
    links: [
      { label: 'Github', href: 'https://github.com/Salford-Hack-Camp-G39/BCS-Student-Placement-Application.git', IconComponent: GithubLogoIcon },
      {
        label: 'View Demo', href: 'https://youtube.com'
      },
    ],
  }, 
  {
    slug: 'project-seven',
    imageUrl: '/projects/project.png',
    title: 'Problem Solving Patters',
    period: 'Sept 2026 - Present',
    tools:["Python"],
    description: '',
    links: [
      { label: 'Github', href: 'https://github.com/Salford-Hack-Camp-G39/BCS-Student-Placement-Application.git', IconComponent: GithubLogoIcon },
      {
        label: 'View Demo', href: 'https://youtube.com'
      },
    ],
  }
]