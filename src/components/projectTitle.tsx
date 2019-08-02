import React from "react"

const ProjectTitle: React.FC = ({ children }) => (
  <React.Fragment>
    <h3 className="text-xl mb-1">{children}</h3>
    <div className="w-20 h-px bg-gray-dark mb-8"></div>
  </React.Fragment>
)

export default ProjectTitle
