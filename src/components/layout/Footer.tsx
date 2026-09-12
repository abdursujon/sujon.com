import '../../style/card.css'
import { GithubLogoIcon } from '@phosphor-icons/react'
import { socialLinks } from '../../data/socialLinks'
import { footerLinkGroups } from '../../data/footerLinks'

const LAST_UPDATED_LABEL = '2026.09'
const SOURCE_REPOSITORY_LABEL = 'your-handle/sujon.com'
const SOURCE_REPOSITORY_URL = 'https://github.com/your-handle/sujon.com'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-16">
      <div className="grid-card rounded-[40px] px-6 py-10 md:px-14 md:py-12">
        <div className="relative z-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-ink-muted">Connect</p>
              <p className="mt-3 font-display text-4xl text-ink md:text-5xl">Abdur Sujon</p>
            </div>
            <p className="text-base text-ink-muted">
              Full Stack &amp; Mobile Developer | Final Year CS Student
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {footerLinkGroups.map(({ heading, links }) => (
              <nav
                key={heading}
                className="rounded-3xl border border-ink/5 bg-white/40 p-6 md:p-8 dark:bg-white/5"
              >
                <h2 className="font-display text-sm uppercase tracking-[0.2em] text-ink">
                  {heading}
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {links.map(({ label, href, isExternal }) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-base text-ink-muted transition-colors hover:text-accent"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-ink/5 bg-white/40 p-6 md:p-8 dark:bg-white/5">
            <h2 className="font-display text-sm uppercase tracking-[0.2em] text-ink">Connect</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, IconComponent }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-12 items-center justify-center rounded-full border border-ink/10 bg-white/60 text-ink transition-colors hover:border-accent/40 hover:text-accent dark:bg-white/5"
                  >
                    <IconComponent size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 h-px bg-ink/10" />

          <div className="mt-6 flex flex-col gap-4 text-sm text-ink-muted md:flex-row md:justify-between">
            <div className="flex flex-col gap-1">
              <p>© {currentYear} Abdur Sujon · All rights reserved</p>
              <p>Last updated: {LAST_UPDATED_LABEL}</p>
            </div>

            <div className="flex flex-col gap-1 md:items-end">
              <p>
                <a href="#values" className="transition-colors hover:text-accent">
                  Privacy Policy
                </a>
                <span className="mx-2">·</span>
                <a href="#values" className="transition-colors hover:text-accent">
                  Terms &amp; Disclaimer
                </a>
              </p>
              <p className="flex items-center gap-2">
                Built with
                <a
                  href={SOURCE_REPOSITORY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <GithubLogoIcon size={16} />
                  {SOURCE_REPOSITORY_LABEL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}