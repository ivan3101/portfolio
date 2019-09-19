import React, { useContext } from "react"
import LocaleContext from "../context/localeContext"
import { Link } from "gatsby"

const LanguageSwitcher = () => {
  const { path } = useContext(LocaleContext)

  return (
    <Link
      to={path === "es" ? "/" : "/es"}
      className="inline-block bg-blue text-white py-3 px-2 w-full font-semibold sm:rounded sm:w-auto sm:py-1"
    >
      {path === "es" ? "Change to English" : "Cambiar a Español"}
    </Link>
  )
}

export default LanguageSwitcher
