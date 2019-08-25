import React from "react"
import MenuButtonStyles from "./menuButton.module.css"

interface MenuButtonProps {
  showMenu: boolean
  onClick: React.MouseEventHandler
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, showMenu }) => {
  let classes =
    "text-center fixed px-3 py-4 top-0 right-0 z-50 rounded-l-sm sm:hidden "

  classes += showMenu ? "bg-white" : "bg-yellow"

  const bar1 = showMenu ? ` ${MenuButtonStyles.close1}` : ""
  const bar2 = showMenu ? ` ${MenuButtonStyles.close2}` : ""
  const bar3 = showMenu ? ` ${MenuButtonStyles.close3}` : ""

  return (
    <button className={classes} onClick={onClick}>
      <p className="sr-only">
        {showMenu
          ? "Close mobile navigation menu"
          : "Open mobile navigation menu"}
      </p>
      <span
        className={MenuButtonStyles.iconBar + bar1}
        aria-hidden={true}
      ></span>
      <span
        className={MenuButtonStyles.iconBar + bar2}
        aria-hidden={true}
      ></span>
      <span
        className={MenuButtonStyles.iconBar + bar3}
        aria-hidden={true}
      ></span>
    </button>
  )
}

export default MenuButton
