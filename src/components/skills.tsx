import React, { useContext } from "react"
import Container from "./container"
import SectionHeader from "./sectionHeader"
import SkillIconContainer from "./skillIconContainer"
import IconsList from "./iconsList"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"
import useTranslation from "../hooks/useTranslation"

const Skills = () => {
  const dispatch = useContext(NavbarDispatchContext)

  const [ref, inView] = useInView({
    threshold: 0.4,
  })

  if (inView) {
    dispatch!(navbarPayload(NavbarTypes.SKILLS))
  }

  const { skills } = useTranslation()

  return (
    <section
      className="py-12 bg-grey"
      ref={ref}
      id={skills.title.replace(" ", "-").toLowerCase()}
    >
      <Container>
        <SectionHeader>{skills.title}</SectionHeader>
        <p className="mx-auto px-6 mt-6 mb-5 md:text-center lg:px-48">
          {skills.description}
        </p>
        <IconsList>
          <SkillIconContainer />
        </IconsList>
      </Container>
    </section>
  )
}

export default Skills
