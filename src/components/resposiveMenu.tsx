import React from "react"

interface MobileNavbarProps {
  show: boolean
  onClickLink: React.MouseEventHandler
}

const ResponsiveMenu: React.FC<MobileNavbarProps> = ({ show, onClickLink }) => {
  let classes = "fixed h-screen bg-white w-3/5 top-0 right-0 z-50 "

  classes += show ? "block" : "hidden"

  return (
    <nav className={classes}>
      <ul>
        <li>
          <a href="#about" onClick={onClickLink}>
            about
          </a>
        </li>
        <li>
          <a href="#skills" onClick={onClickLink}>
            skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onClickLink}>
            projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClickLink}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default ResponsiveMenu
