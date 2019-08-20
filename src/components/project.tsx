import React from "react"

interface ProjectProps {
  mockImage: string
  description: string
}

const Project: React.FC<ProjectProps> = ({
  children,
  mockImage,
  description,
}) => (
  <article className="flex flex-col my-6 leading-loose lg:flex-row">
    <section className="px-6 mb-6 lg:w-1/2 lg:pr-16 lg:pl-4">
      {children}
    </section>
    <img
      src={mockImage}
      alt={description}
      className="md:max-w-lg mx-auto lg:max-w-xl lg:w-3/5"
    />
  </article>
)

export default Project
