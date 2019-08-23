import React from "react"
import Img, { FluidObject } from "gatsby-image"

interface ProjectProps {
  mockImage: FluidObject | FluidObject[]
  description: string
}

const Project: React.FC<ProjectProps> = ({
  children,
  mockImage,
  description,
}) => (
  <article className="flex flex-col my-6 md:flex-row">
    <section className="px-6 mb-6 md:w-1/2 md:pr-16 md:pl-4">
      {children}
    </section>
    <Img
      fluid={mockImage}
      alt={description}
      imgStyle={{
        objectFit: "",
        height: "auto",
      }}
      loading="eager"
      className="md:max-w-lg lg:mx-auto lg:max-w-xl md:w-3/5 md:my-auto"
    />
  </article>
)

export default Project
