import React from "react"

const FormInput: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["input"]>
> = ({ name, type = "text", placeholder }) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    id={name}
    className="text-gray-dark block w-full px-2 py-1 mb-4 rounded bg-white border-solid border-2 border-white focus:border-yellow focus:bg-white"
  />
)

export default FormInput
