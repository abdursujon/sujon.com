import { SectionLabel } from '../components/ui/SectionLabel'
import { ExperienceRow } from '../components/ui/ExperienceRow'
import { experienceEntries } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionLabel>Internship &amp; Work Experience</SectionLabel>

      <ul className="mt-6 flex flex-col gap-4">
        {experienceEntries.map((entry) => (
          <ExperienceRow key={entry.slug} {...entry} />
        ))}
      </ul>
    </section>
  )
}