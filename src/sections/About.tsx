import { SectionLabel } from '../components/ui/SectionLabel'
import { InlineLink } from '../components/ui/InlineLink'

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-4xl px-6">
      <SectionLabel>About</SectionLabel>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-muted">
        <p>Hi, I&apos;m Sujon 👋.</p>

        <p>
          I&apos;m a final-year BSc Computer Science student at{' '}
          <InlineLink href="https://www.salford.ac.uk/">University of Salford, Manchester</InlineLink>,
          specialising in deep learning and full-stack engineering. I achieved <strong>80.17%</strong> in my first year and 
          <strong> 77.33%</strong> in my second. Alongside my academic results, I have years of experience working in teams,
          including several leadership roles such as acting <strong>Scrum Master</strong> at the <strong>University of Salford Hack
          Camp</strong>. Before moving to Manchester for university, I spent over a year as a{' '}
          <strong>Team Leader</strong> at <strong>Subway, Chelmsford </strong>.
        </p>

        <p>
           I enjoy exploring everyday problems and turning ideas into practical solutions, particularly with
            deep learning. For my final-year project, I&apos;m building an <strong>Object Detection System</strong>that tracks food stock 
            in transparent glass containers in kitchen cupboards and send automated message to user if any food item is running low.
            It uses CLIP-based open-set classification, so a new item can be recognised from its text label alone without retraining. It also estimates
            how much of each item is left, which means handling the reflections, refraction and lighting
            changes the glass introduces. When an item runs low, the system adds it to a shopping list and
            sends a notification.
        </p>

        <p>
          I&apos;ve also built and led projects end-to-end for <strong>BCS Manchester</strong>, where my team
          delivered a working MVP. You can read more about my background in my{' '}
          <InlineLink href="/abdur_rahim_sujon_web_cv.pdf">CV</InlineLink>.
        </p>
      </div>
    </section>
  )
}