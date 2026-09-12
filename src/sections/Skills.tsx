import { SectionLabel } from '../components/ui/SectionLabel'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionLabel>Skills</SectionLabel>

      <div className="mt-6 rounded-[32px] border border-ink/5 bg-white/70 p-10 shadow-[0_20px_50px_-30px_rgba(25,35,38,0.35)] dark:bg-white/5">
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-ink/8 bg-ink/4 px-5 py-2.5 text-sm uppercase tracking-[0.12em] text-ink-muted transition-colors hover:bg-ink/8 hover:text-ink"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}