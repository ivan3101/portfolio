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
  <article className="flex flex-row my-12">
    <section className="w-1/2 pl-4 pr-16 text-left">{children}</section>
    <img src={mockImage} alt={description} className="w-1/2" />
  </article>
)

export default Project
