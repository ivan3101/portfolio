import React from "react"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import AboutMe from "../components/aboutMe"

const Index = () => (
  <React.Fragment>
    <main>
      <Hero />
      <Navbar />
      <AboutMe />
    </main>
  </React.Fragment>
)

export default Index
