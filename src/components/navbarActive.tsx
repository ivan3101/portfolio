import React, { useReducer } from "react"
import navbarReducer, { initialState } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"
import NavbarContext from "../context/navbarContext"

const NavbarActive: React.FC = ({ children }) => {
  const [activeItem, dispatch] = useReducer(navbarReducer, initialState)

  return (
    <NavbarContext.Provider value={activeItem}>
      <NavbarDispatchContext.Provider value={dispatch}>
        {children}
      </NavbarDispatchContext.Provider>
    </NavbarContext.Provider>
  )
}

export default NavbarActive
