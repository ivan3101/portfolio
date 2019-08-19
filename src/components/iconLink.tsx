import React from "react"
import SVG from "react-inlinesvg"

interface IconLinkProps {
  src: string
  link: string
}

const IconLink: React.FC<IconLinkProps> = ({ src, link }) => (
  <a href={link} className="w-10 h-full inline-block mr-3">
    <SVG src={src} className="w-full h-full" />
  </a>
)

export default IconLink
