import React from "react"
import formInputStyles from "./formInput.module.css"

interface FormInputProps {
  error: boolean
}

const FormInput: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["input"]> & FormInputProps
> = ({ error, type = "text", ...props }) => {
  let classes =
    "text-grey-dark block w-full px-2 py-1 mb-1 rounded border-solid border-2 bg-white focus:bg-white "

  classes += error
    ? `border-red focus:border-red ${formInputStyles.error}`
    : "border-white focus:border-yellow"

  return <input {...props} type={type} className={classes} />
}

export default FormInput
