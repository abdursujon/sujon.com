import {
  BrainIcon,
  CpuIcon,
  CoffeeIcon,
  GlobeIcon,
  DeviceMobileIcon,
  DatabaseIcon,
  GitBranchIcon,
  UsersThreeIcon,
  type Icon,
} from '@phosphor-icons/react'

export type SkillCategory = {
  categoryName: string
  skillNames: string[]
  IconComponent: Icon
  tintColor: string
}

export const skillCategories: SkillCategory[] = [
  {
    categoryName: 'Python & AI',
    skillNames: ['Python', 'PyTorch', 'CLIP', 'ONNX Runtime', 'OpenCV', 'Matplotlib', 'Flask', 'Pytest'],
    IconComponent: BrainIcon,
    tintColor: '#8b5cf6',
  },
  {
    categoryName: 'Embedded',
    skillNames: ['C++ (Arduino)', 'ESP32', 'Raspberry Pi'],
    IconComponent: CpuIcon,
    tintColor: '#f97316',
  },
  {
    categoryName: 'Java',
    skillNames: ['Java', 'Spring Boot', 'JPA', 'JUnit', 'MockMVC', 'Gradle', 'Maven', 'JavaFX'],
    IconComponent: CoffeeIcon,
    tintColor: '#ef4444',
  },
  {
    categoryName: 'Web',
    skillNames: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'PHP', 'Tailwind CSS', 'Bootstrap'],
    IconComponent: GlobeIcon,
    tintColor: '#06b6d4',
  },
  {
    categoryName: 'Mobile',
    skillNames: ['Kotlin', 'Android Development'],
    IconComponent: DeviceMobileIcon,
    tintColor: '#22c55e',
  },
  {
    categoryName: 'Databases',
    skillNames: ['PostgreSQL', 'MariaDB', 'SQLite'],
    IconComponent: DatabaseIcon,
    tintColor: '#3b82f6',
  },
  {
    categoryName: 'DevOps & Tools',
    skillNames: ['Docker', 'AWS EC2', 'GitHub Actions', 'Netlify', 'Git', 'Figma'],
    IconComponent: GitBranchIcon,
    tintColor: '#ec4899',
  },
  {
    categoryName: 'Practices',
    skillNames: ['MVC', 'Design Patterns', 'Scrum'],
    IconComponent: UsersThreeIcon,
    tintColor: '#eab308',
  },
]
