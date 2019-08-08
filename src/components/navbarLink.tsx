import React from "react"

type NavbarLinkProps = { active: boolean } & React.PropsWithoutRef<
  JSX.IntrinsicElements["a"]
>

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, href, active }) => {
  let className =
    "uppercase text-blue inline-block py-3 px-4 border-solid border-b-2 hover:border-blue"

  className += active ? " border-blue" : " border-white"

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default NavbarLink
