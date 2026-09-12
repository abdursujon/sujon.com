export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  period: string
  description: string
  imageUrl?: string
  links?: ProjectLink[]
}