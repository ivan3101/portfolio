import React from "react"

const FormLabel: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["label"]>
> = ({ children, htmlFor }) => (
  <label
    className="text-left font-semibold block font-medium mb-1"
    htmlFor={htmlFor}
  >
    {children}
  </label>
)

export default FormLabel
