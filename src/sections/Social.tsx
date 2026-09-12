
import { socialLinks } from '../data/socialLinks'

export function Social() {
  return (
    <section id="social" className="flex flex-col items-center gap-6 px-6 pb-20">
      <ul className="flex items-center gap-7">
        {socialLinks.map(({ label, href, IconComponent }) => {
          const opensInNewTab = href.startsWith('http')
          return (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target={opensInNewTab ? '_blank' : undefined}
                rel={opensInNewTab ? 'noopener noreferrer' : undefined}
                className="block text-ink-muted transition duration-200 hover:-translate-y-0.5 hover:text-ink"
              >
                <IconComponent size={28} />
              </a>
            </li>
          )
        })}
      </ul>
       <div className="h-px w-full max-w-2xl bg-linear-to-r from-transparent via-ink/15 to-transparent" />
    </section>
  )
}