import React from "react"
import TooltipStyles from "./tooltip.module.css"

export enum TooltipBackground {
  Red = "red",
  GreyDark = "greyDark",
}

interface TooltipProps {
  background: TooltipBackground
  show: boolean
  message: string
  block: boolean
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  background = TooltipBackground.GreyDark,
  show = false,
  message = "Hello World",
  block = false,
}) => {
  const containerClasses = block ? "block" : "inline-block"

  let classes = `w-auto text-sm text-white font-semibold text-center rounded-sm p-1 absolute z-10 ${TooltipStyles.tooltipText} `

  if (background === TooltipBackground.Red) {
    classes += `bg-red ${TooltipStyles.red} `
  } else if (background === TooltipBackground.GreyDark) {
    classes += `bg-grey-dark ${TooltipStyles.grey} `
  }

  classes += show ? TooltipStyles.visible : TooltipStyles.hidden

  return (
    <div className={"relative " + containerClasses}>
      {children}
      <span className={classes}>{message}</span>
    </div>
  )
}

export default Tooltip
