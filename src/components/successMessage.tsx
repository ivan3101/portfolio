import React from "react"

interface SuccessMessageProps {
  show: boolean
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ show, children }) =>
  show ? (
    <section className="mb-3 p-4 text-left rounded bg-green text-green-dark">
      {children}
    </section>
  ) : null

export default SuccessMessage
