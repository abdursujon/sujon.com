import type { Icon } from '@phosphor-icons/react'

export interface ProjectLink {
  label: string
  href?: string
  IconComponent?: Icon
}

export interface Project {
  slug: string
  title: string
  period: string
  tools: string[]
  description: string
  imageUrl?: string
  links?: ProjectLink[]
}