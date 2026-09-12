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
import { DigitalArt } from './sections/DigitalArt'
import { Drawings } from './sections/Drawings'
import { Interests } from './sections/Interests'
import { Values } from './sections/Values'
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
      <DigitalArt/>
      <Drawings/>
      <Interests/>
      <Values/>
      <Footer/>
    </>
  )
}

export default App
