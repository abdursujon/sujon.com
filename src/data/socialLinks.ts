import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
  type Icon,
} from '@phosphor-icons/react'

export interface SocialLink {
  label: string
  href: string
  IconComponent: Icon
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/your-handle', IconComponent: GithubLogoIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle', IconComponent: LinkedinLogoIcon },
  { label: 'Email', href: 'mailto:you@example.com', IconComponent: EnvelopeSimpleIcon },
]