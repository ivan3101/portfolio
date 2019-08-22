import React from "react"
import MenuButtonStyles from "./menuButton.module.css"

interface MenuButtonProps {
  onClick: React.MouseEventHandler
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => (
  <button
    className="text-center fixed px-3 py-4 bg-yellow top-0 right-0 z-20 rounded-l-sm sm:hidden"
    onClick={onClick}
  >
    <span className={MenuButtonStyles.iconBar}></span>
    <span className={MenuButtonStyles.iconBar}></span>
    <span className={MenuButtonStyles.iconBar}></span>
  </button>
)

export default MenuButton
