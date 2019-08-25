import React from "react"
import textAreaStyles from "./textArea.module.css"

interface TextAreaProps {
  error: boolean
}

const TextArea: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["textarea"]> & TextAreaProps
> = ({ error, ...props }) => {
  let classes =
    "text-grey-dark text-base block w-full px-2 py-1 mb-1 rounded border-solid border-2 bg-white focus:bg-white h-40 "

  classes += error
    ? `border-red focus:border-red ${textAreaStyles.error}`
    : "border-white focus:border-yellow"

  return <textarea {...props} className={classes}></textarea>
}

export default TextArea
