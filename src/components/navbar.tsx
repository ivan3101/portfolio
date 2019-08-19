import React, { useContext } from "react"
import Container from "./container"
import NavbarLink from "./navbarLink"
import NavbarContext from "../context/navbarContext"
import IconLink from "./iconLink"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"

const navbarItems = ["about", "skills", "projects", "contact"]

const Navbar = () => {
  const activeItem = useContext(NavbarContext)

  return (
    <nav className="h-50px top-0 bg-white sticky shadow z-50">
      <Container>
        <ul className="flex flex-row h-full">
          {navbarItems.map((item: string, index: number) => (
            <li key={item}>
              <NavbarLink href={`#${item}`} active={activeItem === index}>
                {item}
              </NavbarLink>
            </li>
          ))}
          <li className="ml-auto">
            <IconLink
              src={linkedinIcon}
              link={
                "https://www.linkedin.com/in/iv%C3%A1n-de-menezes-64ba17122/"
              }
            />
          </li>
          <li>
            <IconLink src={githubIcon} link={"https://github.com/ivan3101/"} />
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
