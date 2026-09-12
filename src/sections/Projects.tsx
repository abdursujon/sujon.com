
import { useState } from 'react'
import { CaretDownIcon } from '@phosphor-icons/react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Button } from '../components/ui/Button'
import { ProjectCard } from '../components/ui/ProjectCard'
import { projects } from '../data/projectData'

const INITIALLY_VISIBLE_PROJECT_COUNT = 3

export function Projects() {
  const [areAllProjectsVisible, setAreAllProjectsVisible] = useState(false)

  const visibleProjects = areAllProjectsVisible
    ? projects
    : projects.slice(0, INITIALLY_VISIBLE_PROJECT_COUNT)

  const hasHiddenProjects = projects.length > INITIALLY_VISIBLE_PROJECT_COUNT

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col items-center text-center">
        <SectionLabel>Selected Projects</SectionLabel>
        <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">
          Check out my latest work
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>

      {hasHiddenProjects && (
        <div className="mt-10 flex justify-center">
          <Button onClick={() => setAreAllProjectsVisible((isVisible) => !isVisible)}>
            <CaretDownIcon
              size={16}
              className={`transition-transform duration-300 ${areAllProjectsVisible ? 'rotate-180' : ''}`}
            />
            {areAllProjectsVisible ? 'Show Less' : 'Show All'}
          </Button>
        </div>
      )}
    </section>
  )
}
