import React from "react"
import SVG from "react-inlinesvg"

interface IconLinkProps {
  src: string
  title: string
  link: string
}

const IconLink: React.FC<IconLinkProps> = ({ src, link, title }) => (
  <a href={link} className="w-10 h-full inline-block mr-3" aria-label={title}>
    <SVG
      role="img"
      src={src}
      className="w-full h-full"
      title={title}
      aria-hidden="true"
    />
  </a>
)

export default IconLink
