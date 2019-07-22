import React from "react"

interface IconLinkProps {
  to: string
  src: string
  alt: string
}

const IconLink: React.FC<IconLinkProps> = ({ to, src, alt }) => (
  <a rel="noopener noreferrer" href={to} target="_blank" className="block mr-5">
    <img src={src} alt={alt} className="w-6 h-6" />
  </a>
)

export default IconLink
