import React, { useContext } from "react"
import Container from "./container"
import NavbarLink from "./navbarLink"
import NavbarContext from "../context/navbarContext"
import IconLink from "./iconLink"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import useTranslation from "../hooks/useTranslation"
import LanguageSwitcher from "../components/languageSwitcher"

const Navbar = () => {
  const activeItem = useContext(NavbarContext)

  const { navbar } = useTranslation()

  const navbarItems = navbar.links.split(",")

  return (
    <nav className="h-50px top-0 sm:text-sm lg:text-base bg-white sticky shadow z-50 hidden sm:block">
      <Container>
        <ul className="flex flex-row h-full">
          {navbarItems.map((item: string, index: number) => (
            <li key={item}>
              <NavbarLink
                href={"#" + item.replace(" ", "-")}
                active={activeItem === index}
              >
                {item}
              </NavbarLink>
            </li>
          ))}
          <li className="ml-auto">
            <IconLink
              src={linkedinIcon}
              title={navbar.linkedin}
              link={
                "https://www.linkedin.com/in/iv%C3%A1n-de-menezes-64ba17122/"
              }
            />
          </li>
          <li>
            <IconLink
              src={githubIcon}
              title={navbar.github}
              link={"https://github.com/ivan3101/"}
            />
          </li>
          <li className="self-center">
            <LanguageSwitcher />
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
