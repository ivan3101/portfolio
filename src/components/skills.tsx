import React, { useContext } from "react"
import Container from "./container"
import SectionHeader from "./sectionHeader"
import SkillIconContainer from "./skillIconContainer"
import IconsList from "./iconsList"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"

const Skills = () => {
  const dispatch = useContext(NavbarDispatchContext)

  const [ref, inView] = useInView({
    threshold: 0.4,
  })

  if (inView) {
    dispatch!(navbarPayload(NavbarTypes.SKILLS))
  }

  return (
    <section className="py-12 bg-gray" ref={ref} id="skills">
      <Container>
        <SectionHeader>SKILLS</SectionHeader>
        <p className="mx-auto text-center px-48 mt-6 mb-5">
          In my time as a Web Developer, I learned a variety of Computational
          Languages, Libraries, Frameworks, Databases and Tools. I’m specialized
          in JavaScript and use it for both, Front-end and Back-end development.
          In Front-end I find myself mostly using ReactJS, and ExpressJS for the
          Back-end.
        </p>
        <IconsList>
          <SkillIconContainer />
        </IconsList>
      </Container>
    </section>
  )
}

export default Skills
