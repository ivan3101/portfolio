import { createContext, Dispatch } from "react"
import { Action } from "../reducer/navbarReducer"

const NavbarDispatchContext = createContext<Dispatch<Action> | null>(null)

export default NavbarDispatchContext
