import type { Project } from '../../types/project'

const PROJECT_LINK_PILL_CLASSES =
  'inline-flex items-center gap-2 rounded-full border border-ink/10 px-3 py-1.5 text-xs uppercase tracking-wider'

export function ProjectCard({ title, period, tools, description, imageUrl, links }: Project) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white/70 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] transition hover:-translate-y-1 dark:bg-white/5">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="aspect-16/10 w-full object-cover" />
      ) : (
        <div className="aspect-16/10 w-full bg-linear-to-br from-ink/8 to-ink/3" />
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-2xl leading-snug text-ink">{title}</h3>
        <p className="text-xs uppercase tracking-[0.15em] text-ink-muted">{period}</p>

        {tools.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-ink/5 px-3 py-1 text-xs tracking-wide text-ink-muted dark:bg-white/10"
              >
                {tool}
              </li>
            ))}
          </ul>
        )}

        <p className="text-base leading-relaxed text-ink-muted">{description}</p>

        {links && links.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {links.map(({ label, href, IconComponent }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`${PROJECT_LINK_PILL_CLASSES} text-ink transition hover:bg-ink/5`}
                  >
                    {IconComponent && <IconComponent size={14} />}
                    {label}
                  </a>
                ) : (
                  <span className={`${PROJECT_LINK_PILL_CLASSES} text-ink-muted`}>
                    {IconComponent && <IconComponent size={14} />}
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}