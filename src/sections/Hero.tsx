import '../style/hero.css'
import profileImg from '../assets/home-page-assets/profile.png'

export function Hero() {
  return (
    <section id="hero" className="flex justify-center px-6 pt-36 pb-16">
      <div className="hero-card grid w-full max-w-2xl grid-cols-1 items-center gap-8 rounded-[28px] px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1fr_auto]">
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">Abdur Sujon</h1>
          <p className="mt-2 text-lg text-ink-muted">Final Year BSc Computer Science Student</p>
          <div className="mt-6 space-y-1 text-base text-ink-muted md:text-lg">
            <p>Specialising in Deep Learning & Full Stack Development</p>
          </div>
        </div>

        <div className="hero-portrait-frame relative z-10 order-first mx-auto lg:order-none lg:mx-0">
          <img src={profileImg} alt="Abdur Sujon" />
        </div>
      </div>
    </section>
  )
}