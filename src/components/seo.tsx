import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

const SEO = () => {
  const data = useStaticQuery(query)

  const { title, description, siteUrl } = data.site.siteMetadata

  return (
    <Helmet defaultTitle={title}>
      <html lang="en" />

      <title itemProp="name" lang="en">
        {title}
      </title>

      <base target="_blank" href={siteUrl} />

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />

      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
}

export default SEO
