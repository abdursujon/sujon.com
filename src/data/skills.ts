export type SkillCategory = {
  categoryName: string
  skillNames: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    categoryName: 'Python & AI',
    skillNames: ['Python', 'PyTorch', 'CLIP', 'ONNX Runtime', 'OpenCV', 'Matplotlib', 'Flask', 'Pytest'],
  },
  {
    categoryName: 'Embedded',
    skillNames: ['C++ (Arduino)', 'ESP32', 'Raspberry Pi'],
  },
  {
    categoryName: 'Java',
    skillNames: ['Java', 'Spring Boot', 'JPA', 'JUnit', 'MockMVC', 'Gradle', 'Maven', 'JavaFX'],
  },
  {
    categoryName: 'Web',
    skillNames: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'PHP', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    categoryName: 'Mobile',
    skillNames: ['Kotlin', 'Android Development'],
  },
  {
    categoryName: 'Databases',
    skillNames: ['PostgreSQL', 'MariaDB', 'SQLite'],
  },
  {
    categoryName: 'DevOps & Tools',
    skillNames: ['Docker', 'AWS EC2', 'GitHub Actions', 'Netlify', 'Git', 'Figma'],
  },
  {
    categoryName: 'Practices',
    skillNames: ['MVC', 'Design Patterns', 'Scrum'],
  },
]