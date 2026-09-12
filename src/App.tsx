import { Navbar } from './components/layout/Navbar'
import { Hero } from './sections/Hero'
import { Social } from './sections/Social'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Github } from './sections/Github'
import { Skills } from './sections/Skills'
import { Education } from './sections/Education'
function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <Social/>
      <About/>
      <Github/>
      <Projects/>
      <Skills/>
      <Education/>
    </>
  )
}

export default App
