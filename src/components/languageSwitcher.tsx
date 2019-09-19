import React, { useContext } from "react"
import LocaleContext from "../context/localeContext"
import { Link } from "gatsby"

const LanguageSwitcher = () => {
  const { path } = useContext(LocaleContext)

  return (
    <Link to={path === "es" ? "/" : "/es"}>
      {path === "es" ? "English" : "Español"}
    </Link>
  )
}

export default LanguageSwitcher
