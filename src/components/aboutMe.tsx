import React, { useContext } from "react"
import Container from "./container"
import ProfileImage from "./profileImage"
import SectionHeader from "./sectionHeader"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"
import useTranslation from "../hooks/useTranslation"

const AboutMe = () => {
  const dispatch = useContext(NavbarDispatchContext)

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  if (inView) {
    dispatch!(navbarPayload(NavbarTypes.ABOUT))
  }

  const { about } = useTranslation()

  return (
    <section
      className="py-12 bg-white"
      ref={ref}
      id={about.title.replace(" ", "-").toLowerCase()}
    >
      <Container>
        <SectionHeader>{about.title}</SectionHeader>
        <section className="flex mt-6 items-center flex-col-reverse lg:flex-row">
          <p className="px-6 mt-6 md:px-16 lg:w-1/2">{about.description}</p>
          <div className="lg:w-1/2">
            <ProfileImage />
          </div>
        </section>
      </Container>
    </section>
  )
}

export default AboutMe
