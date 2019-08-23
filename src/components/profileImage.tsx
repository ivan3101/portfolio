import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    file(relativePath: { eq: "profileImage.jpg" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const ProfileImage = () => {
  const data = useStaticQuery(query)

  return (
    <Img
      alt="Photo of Ivan"
      title="Photo of Ivan"
      fixed={data.file.childImageSharp.fixed}
      className="h-64 w-64 rounded-full mx-auto"
      style={{
        display: "block",
      }}
      loading="eager"
    />
  )
}

export default ProfileImage
