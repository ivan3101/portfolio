import React from "react"
import Container from "./container"
import FormLabel from "./formLabel"
import FormInput from "./formInput"
import SectionHeader from "./sectionHeader"

const Contact = () => (
  <section className="py-12 bg-blue text-gray-light">
    <Container>
      <SectionHeader>CONTACT</SectionHeader>
      <p className="px-56 text-center mt-6">
        If you like my work and want to talk with me, then feel free to send me
        a message using the contact form below or contact me through my social
        networks.
      </p>

      <form className="my-10 mx-auto max-w-md text-right">
        <FormLabel htmlFor="name">Your Name</FormLabel>
        <FormInput name="name" placeholder="John Smith" />

        <FormLabel htmlFor="email">Your Email</FormLabel>
        <FormInput name="email" type="email" placeholder="john@example.com" />

        <FormLabel htmlFor="message">Your Message</FormLabel>
        <textarea
          id="message"
          name="message"
          placeholder="Hello, how are you?"
          className="text-gray-dark block w-full px-2 py-1 mb-4 rounded bg-white border-solid border-2 border-white focus:border-yellow focus:bg-white h-40"
        ></textarea>

        <button
          type="submit"
          className="bg-yellow rounded px-6 py-3 font-semibold mt-3"
        >
          Send Message
        </button>
      </form>
    </Container>
  </section>
)

export default Contact
