import React from "react"
import instagramIcon from "../../images/instagram-logo.svg"
import githubIcon from "../../images/github.svg"
import twitterIcon from "../../images/twitter-logo-button.svg"
import IconLink from "./iconLink"
import linkedinIcon from "../../images/linkedin-button.svg"

const Header = () => (
  <header className="w-full px-6 h-12 flex flex-row items-center">
    <h1>Ivan De Menezes</h1>

    <ul className="flex flex-row items-center ml-auto">
      <li>
        <IconLink
          src={linkedinIcon}
          to="https://www.linkedin.com/in/iván-de-menezes-64ba17122"
          alt={"Ivan's Linkedin account"}
        />
      </li>
      <li>
        <IconLink
          src={githubIcon}
          to="https://github.com/ivan3101/"
          alt={"Ivan's Github account"}
        />
      </li>
      <li>
        <IconLink
          src={twitterIcon}
          to="https://twitter.com/ivandmnzs"
          alt={"Ivan's Twitter account"}
        />
      </li>
      <li>
        <IconLink
          src={instagramIcon}
          to="https://instagram.com/ivn310"
          alt={"Ivan's Instagram account"}
        />
      </li>
    </ul>
  </header>
)

export default Header
