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
      { label: 'Private Research Repository', href: '', IconComponent: GithubLogoIcon },
      { label: 'View Project Proposal', href: '/abdur_rahim_sujon_web_cv.pdf'},
      {
        label: 'Contact me for discussion',
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
    description: 'Placement platform built for BCS Manchester to boost undergraduate placement uptake by matching students with employers offering year-long industrial placements. Serves students, employers, career staff, and admins. Responsive PHP app with SQLite backend, Bootstrap UI, and JavaScript, with matching logic aligned to SFIA v8.',
    links: [
      { label: 'View Group Project Report', href: '/University_of_salford_hackcamp_group_39_report.pdf'},
      {
        label: 'Contact me for code',
        href: `mailto:${contactDestinations.emailAddress}?subject=Final Year Project code`,
        IconComponent: EnvelopeSimpleIcon,
      },
    ],
  }, 
  {
    slug: 'project-four',
    imageUrl: '/projects/project3.png',
    title: 'Analytics Engine',
    period: 'Dec 2026 - Present',
    tools:["Java", "JUnit", "MockMVC", "Spring Boot", "AWS", "Docker", "React", "TypeScript"],
    description: 'Spring Boot REST API that profiles CSV and Parquet data. Infers column types, counts nulls and unique values, computes summary statistics, and persists results for later retrieval or download. SHA-256 hashing detects repeat uploads and returns the cached analysis.',
    links: [
      { label: 'Github', href: 'https://github.com/abdursujon/analytics-engine.git', IconComponent: GithubLogoIcon },
      {
        label: 'Launch', href: 'https://abdursujon.github.io/analytics-engine-ui/'
      },
    ],
  },
  {
    slug: 'project-three',
    imageUrl: '/projects/project4.png',
    title: 'PetWatch',
    period: 'Sept 2026 - Present',
    tools:["JavaScript", "PHP", "MariaDB", "MVC"],
    description: 'A community-driven web application that helps pet owners find their lost pets through crowd-sourced sighting reports and an interactive map.',
    links: [
      { label: 'Github', href: 'https://github.com/abdursujon/petwatch.git', IconComponent: GithubLogoIcon },
      {
        label: 'Launch', href: 'https://sickly-impostors.poseidon.salford.ac.uk/clientserver/index.php'
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