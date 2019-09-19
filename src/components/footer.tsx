import React from "react"
import HighlightedText from "./highlightedText"
import Container from "./container"
import useTranslation from "../hooks/useTranslation"

const Footer = () => {
  const { footer } = useTranslation()

  return (
    <footer className="bg-grey-dark text-white py-12 text-center">
      <Container>
        <p className="mb-4">
          {footer.technologies + " "}
          <HighlightedText>
            <a href="https://www.gatsbyjs.org/" className="underline">
              GatsbyJS
            </a>
          </HighlightedText>{" "}
          {footer.and + " "}
          <HighlightedText>
            <a href="https://tailwindcss.com/" className="underline">
              TailwindCSS
            </a>
          </HighlightedText>
          .
        </p>
        <p>Copyright &copy; Ivan De Menezes.</p>
      </Container>
    </footer>
  )
}
export default Footer
