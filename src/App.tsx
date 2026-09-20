import { Navbar } from './components/layout/Navbar'
import { Hero } from './sections/Hero'
import { Social } from './sections/Social'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Github } from './sections/Github'
import { Skills } from './sections/Skills'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
import { Interests } from './sections/Interests'
import { Values } from './sections/Values'
import { LegalDialog } from './components/ui/LegalDialog'
import { Footer } from './components/layout/Footer'

function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <Social/>
      <About/>
      <Github/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Education/>
      <Contact/>
      <Interests/>
      <Values/>
      <Footer/>
      <LegalDialog/>
    </>
  )
}

export default App
