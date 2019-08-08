import React, { useContext } from "react"
import heroStyles from "./hero.module.css"
import HighlightedText from "./highlightedText"
import { useInView } from "react-intersection-observer"
import { navbarPayload, NavbarTypes } from "../reducer/navbarReducer"
import NavbarDispatchContext from "../context/navbarDispatchContext"

const Hero = () => {
  const dispatch = useContext(NavbarDispatchContext)

  const [ref, inView] = useInView({
    threshold: 0.4,
  })

  if (inView) {
    dispatch!(navbarPayload(NavbarTypes.DEFAULT))
  }

  return (
    <header className={heroStyles.hero} ref={ref}>
      <div className="text-gray-light">
        <h1 className="font-bold text-5xl">Hi, I&apos;m Ivan De Menezes</h1>
        <p className="text-2xl">
          A<HighlightedText> Fullstack Web Developer </HighlightedText>
          and
          <HighlightedText> Linux</HighlightedText> enthusiast.
        </p>
      </div>
    </header>
  )
}

export default Hero
