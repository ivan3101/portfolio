import React, { useContext } from "react"
import Container from "./container"
import SectionHeader from "./sectionHeader"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"
import ContactFormContainer from "./contactFormContainer"
import useTranslation from "../hooks/useTranslation"

const Contact = () => {
  const dispatch = useContext(NavbarDispatchContext)

  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  if (inView) {
    dispatch!(navbarPayload(NavbarTypes.CONTACT))
  }

  const { contact } = useTranslation()

  return (
    <section
      className="py-10 bg-blue text-white"
      ref={ref}
      id={contact.title.replace(" ", "-").toLowerCase()}
    >
      <Container>
        <SectionHeader>{contact.title}</SectionHeader>
        <p className="px-3 mt-2 sm:text-center md:px-32 lg:px-56">
          {contact.description}
        </p>
        <ContactFormContainer />
      </Container>
    </section>
  )
}

export default Contact
