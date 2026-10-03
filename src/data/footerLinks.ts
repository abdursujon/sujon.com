import { sectionLinks } from './sectionLinks'

export interface FooterLink {
  label: string
  href: string
  isExternal?: boolean
}

export interface FooterLinkGroup {
  heading: string
  links: FooterLink[]
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    heading: 'Quick Navigation',
    links: sectionLinks,
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Download CV', href: '/abdur_rahim_sujon_cv.pdf', isExternal: true },
      { label: 'Source Code', href: 'https://github.com/abdursujon/sujon.com', isExternal: false },
      { label: 'Values', href: '#values' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]