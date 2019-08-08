import React, { useContext } from "react"
import Container from "./container"
import profileImage from "../../assets/images/profileImage.jpg"
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
    <section className="py-12 bg-white" ref={ref} id="about">
      <Container>
        <SectionHeader>ABOUT</SectionHeader>
        <article className="flex mt-6 items-center">
          <p className="w-1/2 px-16 leading-loose">
            I&apos;m an European Web Developer based in Venezuela. I have a
            degree in Computer Engineering from the Jose Antonio Paez
            University. I love Linux and I&apos;ve been using it since I was 12
            years old. I&apos;ve been programming for almost 6 years now,
            specialized in JavaScript and NodeJS.
          </p>
          <div className="w-1/2">
            <img
              src={profileImage}
              alt="Ivan's photo"
              className="h-64 w-64 rounded-full mx-auto"
            />
          </div>
        </article>
      </Container>
    </section>
  )
}

export default AboutMe
