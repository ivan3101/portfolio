import React from "react"

const SkillIcon: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["img"]>
> = ({ alt, src }) => (
  <img src={src} alt={alt} className="w-16 h-16 mx-4 mb-5" />
)

export default SkillIcon
