import React from "react"

interface ResponsiveNavbarLinkProps {
  active: boolean
}

const ResponsiveNavbarLink: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["a"]> & ResponsiveNavbarLinkProps
> = ({ active, href, onClick, children }) => {
  let classes =
    "w-full inline-block py-3 px-2 capitalize text-blue border-l-4 hover:bg-grey-light hover:border-blue"

  classes += active ? "bg-grey-light border-blue" : "bg-white border-white"

  return (
    <a href={href} onClick={onClick} className={classes}>
      {children}
    </a>
  )
}

export default ResponsiveNavbarLink
