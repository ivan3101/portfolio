import React, { useState } from "react"
import ResponsiveMenu from "./resposiveMenu"
import MenuButton from "./menuButton"

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleOnClick: React.MouseEventHandler = () => {
    setShowMenu((prevState: boolean) => !prevState)
  }

  return (
    <React.Fragment>
      <MenuButton onClick={handleOnClick} showMenu={showMenu} />
      <ResponsiveMenu show={showMenu} onClickLink={handleOnClick} />
    </React.Fragment>
  )
}

export default MobileNavbar
