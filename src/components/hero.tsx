import React from "react"
import heroStyles from "./hero.module.css"
import HighlightedText from "./highlightedText"

const Hero = () => (
  <header className={heroStyles.hero}>
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

export default Hero
