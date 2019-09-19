import { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import LocaleContext from "../context/localeContext"

interface RawData {
  edges: [
    {
      node: {
        name: string
        translations: {
          [key: string]: any
        }
      }
    }
  ]
}

const query = graphql`
  query MyQuery {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childLocalesJson {
            about {
              description
              title
            }
            contact {
              description
              email {
                error {
                  required
                  wrongInput
                }
                label
                placeholder
              }
              message {
                error {
                  required
                  wrongInput
                }
                label
                placeholder
              }
              name {
                error {
                  required
                  wrongInput
                }
                label
                placeholder
              }
              submit
              success {
                message
                title
              }
              title
            }
            footer {
              and
              technologies
            }
            hero {
              title
              subtitle
              role
              and
              linux
            }
            navbar {
              github
              linkedin
              links
            }
            projects {
              rnet {
                description
                title
                technologies
              }
              title
              ujap {
                description
                title
                technologies
              }
            }
            skills {
              description
              title
            }
          }
        }
      }
    }
  }
`

const useTranslation = () => {
  const locale = useContext(LocaleContext)

  const { rawData }: { rawData: RawData } = useStaticQuery(query)

  const simplified = rawData.edges.map(item => ({
    name: item.node.name,
    translations: item.node.translations,
  }))

  const { translations } = simplified.filter(
    lang => lang.name === locale.path
  )[0]

  return translations
}

export default useTranslation
