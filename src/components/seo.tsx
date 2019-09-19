import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import LocaleContext from "../context/localeContext"

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        image
      }
    }
  }
`

const SEO = () => {
  const data = useStaticQuery(query)

  const { siteUrl, image } = data.site.siteMetadata

  const locale = useContext(LocaleContext)

  return (
    <Helmet>
      <html lang={locale.path} />
      <title>{locale.title}</title>
      <meta name="description" content={locale.description} />
      <link rel="canonical" href={siteUrl} />
      <meta property="og:title" content={locale.title} />
      <meta property="og:description" content={locale.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteUrl + "/" + image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={locale.title} />
      <meta name="twitter:description" content={locale.description} />
      <meta name="twitter:creator" content="@ivandmnzs" />
      <meta name="twitter:image" content={siteUrl + "/" + image} />

      <link rel="icon" href={siteUrl + "/favicon.ico"} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={siteUrl + "/apple-touch-icon.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={siteUrl + "/favicon-32x32.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={siteUrl + "/android-chrome-192x192.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={siteUrl + "/favicon-16x16.png"}
      />
      <link rel="manifest" href={siteUrl + "/site.webmanifest"} />
      <link
        rel="mask-icon"
        href={siteUrl + "/safari-pinned-tab.svg"}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta
        name="msapplication-TileImage"
        content={siteUrl + "/mstile-144x144.png"}
      />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

export default SEO
