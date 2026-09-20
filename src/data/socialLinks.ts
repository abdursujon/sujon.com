import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  type Icon,
} from '@phosphor-icons/react'

export interface SocialLink {
  label: string
  href: string
  IconComponent: Icon
}

const GITHUB_URL = 'https://github.com/abdursujon'
const LINKEDIN_URL = 'https://www.linkedin.com/in/abdursujon/'
const INSTAGRAM_URL = 'https://www.instagram.com/abdur.sujon'
const EMAIL_ADDRESS = 'abdursujon@hotmail.com'

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: `mailto:${EMAIL_ADDRESS}`, IconComponent: EnvelopeSimpleIcon },
  { label: 'GitHub', href: GITHUB_URL, IconComponent: GithubLogoIcon },
  { label: 'LinkedIn', href: LINKEDIN_URL, IconComponent: LinkedinLogoIcon },
  { label: 'LinkedIn', href: INSTAGRAM_URL, IconComponent:InstagramLogoIcon },
]

export const contactDestinations = {
  githubUrl: GITHUB_URL,
  githubHandle: 'abdursujon',
  linkedinUrl: LINKEDIN_URL,
  emailAddress: EMAIL_ADDRESS,
}