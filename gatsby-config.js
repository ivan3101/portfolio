module.exports = {
  siteMetadata: {
    title: "Ivan De Menezes | Portfolio",
    description: "Ivan De Menezes is a Fullstack Web Developer focused on ReactJS and NodeJS. Here you can see some of his previous works and also get in touch with him.",
    siteUrl: "https://ivandemenezes.me",
    image: "https://ivandemenezes.me/preview.png"
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images/`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ]
}
