import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionHeader from "./sectionHeader"
import Container from "./container"
import Project from "./project"
import ProjectTitle from "./projectTitle"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"
import useTranslation from "../hooks/useTranslation"

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

  const { projects } = useTranslation()
  const { ujap, rnet } = projects
  const [ujapMockup, rnetMockup] = useStaticQuery(query).allFile.edges

  return (
    <section
      className="pt-12 bg-white"
      ref={ref}
      id={projects.title.replace(" ", "-").toLowerCase()}
    >
      <Container>
        <SectionHeader>{projects.title}</SectionHeader>
        <Project
          mockImage={rnetMockup.node.childImageSharp.fluid}
          description={"RNet"}
        >
          <ProjectTitle>{rnet.title}</ProjectTitle>
          <p>{rnet.description}</p>
          <br />
          <p>{rnet.technologies}</p>
        </Project>
      </Container>

      <div className="h-px bg-blue"></div>

      <Container>
        <Project
          mockImage={ujapMockup.node.childImageSharp.fluid}
          description={"Ujap Online"}
        >
          <ProjectTitle>{ujap.title}</ProjectTitle>
          <p>{ujap.description}</p>
          <br />
          <p>{ujap.technologies}</p>
        </Project>
      </Container>
    </section>
  )
}

export default Projects
