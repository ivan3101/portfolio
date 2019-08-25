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
  <section className="flex flex-col my-6 md:flex-row">
    <article className="px-6 mb-6 md:w-1/2 md:pr-16 md:pl-4">
      {children}
    </article>
    <Img
      fluid={mockImage}
      alt={description}
      imgStyle={{
        objectFit: "",
        height: "auto",
      }}
      loading="lazy"
      className="md:max-w-lg lg:mx-auto lg:max-w-xl md:w-3/5 md:my-auto"
    />
  </section>
)

export default Project
