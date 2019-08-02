import React from "react"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import AboutMe from "../components/aboutMe"
import Skills from "../components/skills"
import Projects from "../components/projects"

const Index = () => (
  <React.Fragment>
    <main>
      <Hero />
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  </React.Fragment>
)

export default Index
