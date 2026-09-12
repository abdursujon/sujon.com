import { SectionLabel } from '../components/ui/SectionLabel'
import { InlineLink } from '../components/ui/InlineLink'

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-4xl px-6">
      <SectionLabel>About</SectionLabel>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-muted">
        <p>Hi, I&apos;m Sujon 👋.</p>

        <p>
          I&apos;m a final year BSc Computer Science student at{' '}
          <InlineLink href="https://example.edu">Your University</InlineLink>, where my work
          centres on deep learning and full stack engineering. I build end-to-end systems — from
          model training pipelines through to the interfaces people actually use. You can read more
          about my background in my <InlineLink href="/cv.pdf">CV</InlineLink>.
        </p>

        <p>
          🔬 <strong className="font-semibold text-ink">Research Interests:</strong> Deep Learning,
          Computer Vision, and On-Device Machine Learning.
        </p>
      </div>
    </section>
  )
}