import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionHeader from "./sectionHeader"
import Container from "./container"
import Project from "./project"
import ProjectTitle from "./projectTitle"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"

const query = graphql`
  query {
    allFile(filter: { name: { regex: "/mockup/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 576
              srcSetBreakpoints: [360, 640, 768, 1024, 1280]
              jpegProgressive: true
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const dispatch = useContext(NavbarDispatchContext)

  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  if (inView) {
    dispatch!(navbarPayload(NavbarTypes.PROJECTS))
  }

  const [ujapMockup, rnetMockup] = useStaticQuery(query).allFile.edges

  return (
    <section className="pt-12 bg-white" ref={ref} id="projects">
      <Container>
        <SectionHeader>PROJECTS</SectionHeader>
        <Project
          mockImage={rnetMockup.node.childImageSharp.fluid}
          description={"RNet Screenshot"}
        >
          <ProjectTitle>RNet Blog</ProjectTitle>
          <p>
            RNet is a blog about technology. The idea was to made a web page
            while thinking about the problems that experiments people with
            visual discapacities while navigating. I was responsible for the UI
            design, UX and Front-end development and a API to use as Back-end.
          </p>
          <br />
          <p>
            This project was built using Angular and SemanticUI for the
            Front-end. The Back-end was built using NodeJS and Express, the
            Database used was MongoDB.
          </p>
        </Project>
      </Container>

      <div className="h-px bg-blue"></div>

      <Container>
        <Project
          mockImage={ujapMockup.node.childImageSharp.fluid}
          description={"Ujap Online Screenshot"}
        >
          <ProjectTitle>UJAP Online</ProjectTitle>
          <p>
            For Jose Antonio Paez University, I created a redisigned interface
            for their online platform using new technologies and design
            tendencies. I was responsible for UI design, UX and Front-end
            development and a new API for the platform.
          </p>
          <br />
          <p>
            This project was built using ReactJS, Sass and CoreUI for the
            Front-end. The Back-end was built using NodeJS and Express, also the
            Database used was MongoDB.
          </p>
        </Project>
      </Container>
    </section>
  )
}

export default Projects
