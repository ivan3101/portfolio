import React from "react"

const SubmitButton: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["button"]>
> = props => {
  const { disabled } = props
  let classes = "rounded px-6 py-3 font-semibold mt-3 "

  classes += disabled
    ? "bg-grey text-grey-dark cursor-not-allowed"
    : "bg-yellow cursor-pointer"

  return (
    <button {...props} type="submit" className={classes}>
      {props.children}
    </button>
  )
}

export default SubmitButton
