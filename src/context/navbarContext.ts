import { createContext } from "react"
import { NavbarTypes } from "../reducer/navbarReducer"

const NavbarContext = createContext<NavbarTypes>(4)

export default NavbarContext
