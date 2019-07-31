import React from "react"
import Container from "./container"
import profileImage from "../../images/profileImage.jpg"

const AboutMe = () => (
  <section className="pt-12 pb-12 bg-white">
    <Container>
      <h2 className="font-semibold text-2xl text-center">ABOUT</h2>
      <article className="flex mt-12 items-center">
        <p className="w-1/2 px-16 leading-loose">
          I&apos;m an European Web Developer based in Venezuela. I have a degree
          in Computer Engineering from the Jose Antonio Paez University. I love
          Linux and I&apos;ve been using it since I was 12 years old. I&apos;ve
          been programming for almost 6 years now, specialized in JavaScript and
          NodeJS.
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

export default AboutMe
