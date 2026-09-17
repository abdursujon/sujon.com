import '../style/card.css'
import { GithubLogoIcon } from '@phosphor-icons/react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { contactDestinations } from '../data/socialLinks'

export function Contact() {
  const { emailAddress, linkedinUrl, githubUrl, githubHandle } = contactDestinations

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="grid-card rounded-[40px] px-6 py-16 md:px-16">
        <div className="relative z-10 flex flex-col items-center text-center">
          <SectionLabel>Contact</SectionLabel>

          <h2 className="mt-8 font-display text-5xl font-medium text-ink md:text-6xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-ink-muted md:text-xl">
            Want to chat? Feel free to reach out
          </p>
        </div>

        <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-2">
          <a
            href={`mailto:${emailAddress}`}
            className="flex flex-col rounded-[28px] border border-[#bfe6ef] bg-[#e8f7fa] p-6 md:p-8 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f7d8c] dark:text-accent">
              Via Email
            </span>
            <span className="mt-4 text-2xl font-semibold text-ink">Reach out</span>
            <span className="mt-3 text-base text-ink-muted">
              Interested in my work? Please send me email.
            </span>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col rounded-[28px] border border-[#f0dfae] bg-[#fdf6e3] p-6 md:p-8 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a8751a] dark:text-[#e0b860]">
              Via LinkedIn
            </span>
            <span className="mt-4 text-2xl font-semibold text-ink">Message me directly</span>
            <span className="mt-3 text-base text-ink-muted">
              You can also message me in Linkedin
            </span>
          </a>
        </div>

        <div className="relative z-10 mt-12 flex justify-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect on GitHub, @${githubHandle}`}
            className="group relative flex size-14 items-center justify-center rounded-full border border-ink/10 bg-white/60 text-ink transition-colors hover:border-accent/40 hover:text-accent dark:bg-white/5"
          >
            <GithubLogoIcon size={24} />

            <span className="pointer-events-none absolute -bottom-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1.5 text-xs font-medium tracking-wider text-surface opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Connect on GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}