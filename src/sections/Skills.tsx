import { skillCategories } from '../data/skills'
import { SectionLabel } from '../components/ui/SectionLabel'

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionLabel>Skills</SectionLabel>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {skillCategories.map((skillCategory) => (
          <div
            key={skillCategory.categoryName}
            className="rounded-[32px] border border-ink/5 bg-white/70 p-6 md:p-8 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] dark:bg-white/5"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              {skillCategory.categoryName}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-3">
              {skillCategory.skillNames.map((skillName) => (
                <li
                  key={skillName}
                  className="rounded-full border border-ink/8 bg-ink/4 px-5 py-2.5 text-sm uppercase tracking-[0.12em] text-ink-muted transition-colors hover:bg-ink/8 hover:text-ink"
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