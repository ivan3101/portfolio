import React from "react"

const HighlightedText: React.FC = ({ children }) => (
  <span className="text-yellow">{children}</span>
)

export default HighlightedText
