import React, { useContext } from "react"
import heroStyles from "./hero.module.css"
import HighlightedText from "./highlightedText"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"
import useTranslation from "../hooks/useTranslation"

const Hero = () => {
  const dispatch = useContext(NavbarDispatchContext)

  const [ref, inView] = useInView({
    threshold: 0.4,
  })

  if (inView) {
    dispatch!(navbarPayload(NavbarTypes.DEFAULT))
  }

  const { hero } = useTranslation()

  return (
    <header className={heroStyles.hero} ref={ref}>
      <div className="text-grey-light">
        <h1 className="font-bold text-3xl sm:text-5xl">{hero.title}</h1>
        <p className="text-xl sm:text-2xl">
          {hero.subtitle} <HighlightedText>{hero.role}</HighlightedText>{" "}
          {hero.and} <HighlightedText>{hero.linux}</HighlightedText>
        </p>
      </div>
    </header>
  )
}

export default Hero
