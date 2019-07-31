import React from "react"
import SkillIcon from "./skillIcon"

interface Icon {
  description: string
  src: string
}

const r = require.context("../../assets/icons/skills", false, /\.svg/)

const icons: Icon[] = r.keys().map((item: string) => {
  const iconName = item.replace("./", "").split(".")[0]

  const icon: Icon = {
    description: iconName,
    src: r(item),
  }

  return icon
})

const SkillIconContainer = () => (
  <React.Fragment>
    {icons.map((icon: Icon) => (
      <SkillIcon src={icon.src} alt={icon.description} key={icon.description} />
    ))}
  </React.Fragment>
)

export default SkillIconContainer
