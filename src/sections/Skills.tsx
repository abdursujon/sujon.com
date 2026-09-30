import { skillCategories } from '../data/skills'
import { SectionLabel } from '../components/ui/SectionLabel'

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 pb-25">
      <SectionLabel>Skills</SectionLabel>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {skillCategories.map(({ categoryName, skillNames, IconComponent, tintColor }) => (
          <div
            key={categoryName}
            style={{ '--skill-tint': tintColor } as React.CSSProperties}
            className="group relative overflow-hidden rounded-3xl border border-ink/5 bg-card p-6 md:p-8 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] transition hover:border-(--skill-tint)/40"
          >
            <span
              className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-(--skill-tint)/15 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />

            <IconComponent
              size={140}
              weight="thin"
              className="pointer-events-none absolute -right-6 -bottom-8 text-(--skill-tint) opacity-10 transition duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:opacity-20"
              aria-hidden="true"
            />

            <div className="relative flex items-center gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-(--skill-tint)/15 text-(--skill-tint) transition-transform duration-300 group-hover:scale-110">
                <IconComponent size={22} weight="duotone" />
              </span>

              <h3 className="flex-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                {categoryName}
              </h3>

              <span className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-ink-muted">
                {skillNames.length}
              </span>
            </div>

            <ul className="relative mt-6 flex flex-wrap gap-3">
              {skillNames.map((skillName) => (
                <li
                  key={skillName}
                  className="rounded-full border border-ink/10 bg-pill px-5 py-2.5 text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:border-(--skill-tint)/50 hover:text-(--skill-tint) dark:text-slate-300"
                >
                  {skillName}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}