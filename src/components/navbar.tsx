import React from "react"
import Container from "./container"
import NavbarLink from "./navbarLink"

const Navbar = () => (
  <nav className="h-12 bg-white sticky shadow">
    <Container>
      <ul className="flex flex-row items-center h-full">
        <li>
          <NavbarLink href="#about">ABOUT</NavbarLink>
        </li>
        <li>
          <NavbarLink href="#skills">SKILLS</NavbarLink>
        </li>
        <li>
          <NavbarLink href="#projects">PROJECTS</NavbarLink>
        </li>
        <li>
          <NavbarLink href="#contact">CONTACT</NavbarLink>
        </li>
      </ul>
    </Container>
  </nav>
)

export default Navbar
