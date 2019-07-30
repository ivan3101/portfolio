import React from "react"

const NavbarLink: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["a"]>
> = ({ children, href }) => (
  <a
    href={href}
    className="text-blue inline-block py-3 px-4 border-solid border-b-2 border-white hover:border-blue"
  >
    {children}
  </a>
)

export default NavbarLink
