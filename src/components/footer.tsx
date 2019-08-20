import React from "react"
import HighlightedText from "./highlightedText"
import Container from "./container"

const Footer = () => (
  <footer className="leading-loose bg-grey-dark text-white py-12 text-center">
    <Container>
      <p className="mb-4">
        This portfolio was built using{" "}
        <HighlightedText>
          <a href="https://www.gatsbyjs.org/" className="hover:underline">
            GatsbyJS
          </a>
        </HighlightedText>{" "}
        and{" "}
        <HighlightedText>
          <a href="https://tailwindcss.com/" className="hover:underline">
            TailwindCSS
          </a>
        </HighlightedText>
        .
      </p>
      <p>Copyright &copy; Ivan De Menezes.</p>
    </Container>
  </footer>
)

export default Footer
