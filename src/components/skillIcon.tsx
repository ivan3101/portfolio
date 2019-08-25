import React from "react"
import SVG, { IProps } from "react-inlinesvg"

const SkillIcon: React.FC<IProps> = ({ src, description }) => (
  <SVG
    src={src}
    className="w-12 h-12 mx-4 mt-5"
    role="img"
    title={description}
  />
)

export default SkillIcon
