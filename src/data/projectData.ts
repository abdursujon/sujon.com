import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    period: 'Mar. 2026 - Present',
    description: 'One or two sentences describing what the project does and why it matters.',
    links: [
      { label: 'GitHub', href: 'https://github.com/your-handle/project-one' },
      { label: 'Docs', href: 'https://example.com' },
    ],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    period: 'Jun. 2025 - Jan. 2026',
    description: 'One or two sentences describing what the project does and why it matters.',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    period: 'Mar. 2024 - Mar. 2025',
    description: 'One or two sentences describing what the project does and why it matters.',
    links: [{ label: 'GitHub', href: 'https://github.com/your-handle/project-three' }],
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    period: 'Jan. 2024 - Feb. 2024',
    description: 'Hidden until Show All is clicked.',
  },
  {
    slug: 'project-five',
    title: 'Project Five',
    period: 'Aug. 2023 - Dec. 2023',
    description: 'Hidden until Show All is clicked.',
  },
]