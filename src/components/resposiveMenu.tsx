import React, { useContext } from "react"
import ResponsiveMenuStyles from "./resposiveMenu.module.css"
import ResponsiveNavbarLink from "./responsiveNavbarLink"
import { navbarItems } from "./navbar"
import NavbarContext from "../context/navbarContext"
import IconLink from "./iconLink"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"

interface MobileNavbarProps {
  show: boolean
  onClick: React.MouseEventHandler
}

const ResponsiveMenu: React.FC<MobileNavbarProps> = ({ show, onClick }) => {
  const activeItem = useContext(NavbarContext)

  let navClasses =
    "fixed h-full bg-white w-3/5 top-0 right-0 z-40 opacity-100 pt-12 "
  let overlayClasses = `sm:hidden fixed top-0 left-0 w-screen h-screen z-30 ${ResponsiveMenuStyles.NavbarOverlay} `

  navClasses += show
    ? `block ${ResponsiveMenuStyles.showMenu}`
    : `hidden ${ResponsiveMenuStyles.hideMenu}`
  overlayClasses += show
    ? `visible opacity-100 ${ResponsiveMenuStyles.showOverlay}`
    : `invisible opacity-0 ${ResponsiveMenuStyles.hideOverlay}`

  return (
    <React.Fragment>
      <div
        className={overlayClasses}
        onClick={onClick}
        aria-hidden={true}
      ></div>
      <nav className={navClasses}>
        <ul>
          {navbarItems.map((item: string, index: number) => (
            <li key={item}>
              <ResponsiveNavbarLink
                href={"#" + item.replace(" ", "-")}
                active={activeItem === index}
              >
                {item}
              </ResponsiveNavbarLink>
            </li>
          ))}
        </ul>
        <ul className="flex flex-row absolute bottom-0 w-full justify-center">
          <li>
            <IconLink
              link="https://www.linkedin.com/in/iv%C3%A1n-de-menezes-64ba17122/"
              src={linkedinIcon}
              title="Ivan's Linkedin Profile"
            />
          </li>
          <li>
            <IconLink
              link="https://github.com/ivan3101/"
              src={githubIcon}
              title="Ivan's Github profile"
            />
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default ResponsiveMenu
