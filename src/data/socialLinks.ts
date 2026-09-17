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

const GITHUB_URL = 'https://github.com/abdursujon'
const LINKEDIN_URL = 'https://www.linkedin.com/in/abdursujon/'
const EMAIL_ADDRESS = 'abdursujon@hotmail.com'

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: GITHUB_URL, IconComponent: GithubLogoIcon },
  { label: 'LinkedIn', href: LINKEDIN_URL, IconComponent: LinkedinLogoIcon },
  { label: 'Email', href: `mailto:${EMAIL_ADDRESS}`, IconComponent: EnvelopeSimpleIcon },
]

export const contactDestinations = {
  githubUrl: GITHUB_URL,
  githubHandle: 'your-handle',
  linkedinUrl: LINKEDIN_URL,
  emailAddress: EMAIL_ADDRESS,
}