import React from "react"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import AboutMe from "../components/aboutMe"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"
import NavbarActive from "../components/navbarActive"
import MobileNavbar from "../components/mobileNavbar"
import SEO from "../components/seo"
import LocaleContext from "../context/localeContext"
import { LocaleContext as ILocaleContext } from "../context/localeContext"

interface IndexProps {
  pageContext: {
    locale: ILocaleContext
  }
}

const Index: React.FC<IndexProps> = ({ pageContext }) => (
  <LocaleContext.Provider value={pageContext.locale}>
    <SEO />
    <NavbarActive>
      <MobileNavbar />
      <Hero />
      <main className="text-grey-dark xl:text-lg leading-relaxed">
        <Navbar />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </NavbarActive>
    <Footer />
  </LocaleContext.Provider>
)

export default Index
