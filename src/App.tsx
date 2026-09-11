import { useState } from 'react'
import { Hero } from './sections/Hero'
import { Container } from './components/layout/Container'
import { Navbar } from './components/layout/Navbar'

function App() {
  return(
  <Container>
    <Navbar/>
    <Hero/>
  </Container>
  )
}

export default App
