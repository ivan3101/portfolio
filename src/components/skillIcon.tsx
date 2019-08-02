import React from "react"

const SkillIcon: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["img"]>
> = ({ alt, src }) => (
  <img src={src} alt={alt} className="w-12 h-12 mx-4 mb-5" />
)

export default SkillIcon
