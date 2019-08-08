import React, { useContext } from "react"
import Container from "./container"
import NavbarLink from "./navbarLink"
import NavbarContext from "../context/navbarContext"

const navbarItems = ["about", "skills", "projects", "contact"]

const Navbar = () => {
  const activeItem = useContext(NavbarContext)

  return (
    <nav className="h-50px top-0 bg-white sticky shadow">
      <Container>
        <ul className="flex flex-row items-center h-full">
          {navbarItems.map((item: string, index: number) => (
            <li key={item}>
              <NavbarLink href={`#${item}`} active={activeItem === index}>
                {item}
              </NavbarLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
