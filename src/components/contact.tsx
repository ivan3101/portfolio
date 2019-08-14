import React, { useContext } from "react"
import Container from "./container"
import SectionHeader from "./sectionHeader"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"
import ContactFormContainer from "./contactFormContainer"

const Contact = () => {
  const dispatch = useContext(NavbarDispatchContext)

  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  if (inView) {
    dispatch!(navbarPayload(NavbarTypes.CONTACT))
  }

  return (
    <section className="py-12 bg-blue text-white" ref={ref} id="contact">
      <Container>
        <SectionHeader>CONTACT</SectionHeader>
        <p className="px-56 text-center mt-6">
          If you like my work and want to talk with me, then feel free to send
          me a message using the contact form below or contact me through my
          social networks.
        </p>
        <ContactFormContainer />
      </Container>
    </section>
  )
}

export default Contact
