import { SectionLabel } from '../components/ui/SectionLabel'
import { InlineLink } from '../components/ui/InlineLink'

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 pb-25">
      <SectionLabel>About</SectionLabel>

      <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink-muted">
        <p>Hi, I&apos;m Sujon 👋.</p>

        <p>
          I&apos;m a final-year BSc Computer Science student at{' '}
          <InlineLink href="https://www.salford.ac.uk/">University of Salford, Manchester</InlineLink>,
          specialising in <strong>Deep Learning</strong> and <strong>Full-Stack Software Development</strong>.
          I achieved <strong>80.17%</strong> in my first year and <strong>77.33%</strong> in my second.
          At the <strong>University of Salford HackCamp</strong>, I led a team of seven as acting{' '}
          <strong>Scrum Master</strong>, delivering a group project for <strong>BCS Manchester</strong>.
          Beyond academics, I have years of experience working in teams, including several leadership roles.
          Before moving to Manchester, I spent a couple of years as a <strong>Team Leader</strong> at{' '}
          <strong>Subway, Chelmsford</strong>.
        </p>

        <p>
          I enjoy exploring everyday problems and turning ideas into practical solutions, particularly with
          deep learning. For my final-year project, I&apos;m building an{' '}
          <strong>Embedded AI-Based Smart Kitchen Inventory Tracking System</strong> that monitors food jars
          in my cupboard and alerts me before anything runs out. The research side explores how far an AI
          model can be compressed to run on low-power hardware while still telling apart near-identical items
          like sugar, salt and flour.
        </p>

        <p>
          Outside of coding, you&apos;ll find me playing football and cricket, hiking up a mountain, or
          discovering new music. You can read more about my background in my{' '}
          <InlineLink href="/abdur_rahim_sujon_web_cv.pdf">CV</InlineLink>.
        </p>
      </div>
    </section>
  )
}