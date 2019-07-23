import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import AboutMe from "../components/aboutMe"

const Index = () => (
  <React.Fragment>
    <Header />
    <main>
      <Hero />
      <AboutMe />
    </main>
  </React.Fragment>
)

export default Index
