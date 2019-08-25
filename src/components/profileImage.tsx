import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    file(relativePath: { eq: "profileImage.jpg" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

const ProfileImage = () => {
  const data = useStaticQuery(query)

  return (
    <Img
      alt="Ivan"
      title="Ivan"
      fixed={data.file.childImageSharp.fixed}
      className="h-64 w-64 rounded-full mx-auto"
      style={{
        display: "block",
      }}
      loading="lazy"
    />
  )
}

export default ProfileImage
