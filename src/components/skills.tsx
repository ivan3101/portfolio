import React from "react"
import Container from "./container"
import SectionHeader from "./sectionHeader"
import SkillIconContainer from "./skillIconContainer"

const Skills = () => (
  <section className="py-12 bg-gray">
    <Container>
      <SectionHeader>SKILLS</SectionHeader>
      <p className="mx-auto text-center px-48 mt-6 mb-10">
        In my time as a Web Developer, I learned a variety of Computational
        Languages, Libraries, Frameworks, Databases and Tools. I’m specialized
        in JavaScript and use it for both, Front-end and Back-end development.
        In Front-end I find myself mostly using ReactJS, and ExpressJS for the
        Back-end.
      </p>
      <article className="flex flex-row flex-wrap justify-center">
        <SkillIconContainer />
      </article>
    </Container>
  </section>
)

export default Skills
