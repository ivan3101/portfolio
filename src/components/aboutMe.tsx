import React, { useContext } from "react"
import Container from "./container"
import ProfileImage from "./profileImage"
import SectionHeader from "./sectionHeader"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"

const AboutMe = () => {
  const dispatch = useContext(NavbarDispatchContext)

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  if (inView) {
    dispatch!(navbarPayload(NavbarTypes.ABOUT))
  }

  return (
    <section className="py-12 bg-white" ref={ref} id="about-me">
      <Container>
        <SectionHeader>About Me</SectionHeader>
        <article className="flex mt-6 items-center flex-col-reverse lg:flex-row">
          <p className="px-6 mt-6 md:px-16 lg:w-1/2">
            I&apos;m an European Web Developer based in Venezuela. I have a
            degree in Computer Engineering from the Jose Antonio Paez
            University. I love Linux and I&apos;ve been using it since I was 12
            years old. I&apos;ve been programming for almost 6 years now,
            specialized in JavaScript and NodeJS.
          </p>
          <div className="lg:w-1/2">
            <ProfileImage />
          </div>
        </article>
      </Container>
    </section>
  )
}

export default AboutMe
