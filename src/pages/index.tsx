import React from "react"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import AboutMe from "../components/aboutMe"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"
import NavbarActive from "../components/navbarActive"

const Index = () => (
  <React.Fragment>
    <main className="text-grey-dark xl:text-lg leading-relaxed">
      <NavbarActive>
        <Hero />
        <Navbar />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </NavbarActive>
    </main>
    <Footer />
  </React.Fragment>
)

export default Index
