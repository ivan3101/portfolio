import React from "react"

const ProjectTitle: React.FC = ({ children }) => (
  <React.Fragment>
    <h3 className="text-xl mb-1 font-semibold">{children}</h3>
    <div className="w-20 h-3px bg-yellow mb-8"></div>
  </React.Fragment>
)

export default ProjectTitle
