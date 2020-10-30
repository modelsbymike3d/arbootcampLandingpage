/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "AR Bootcamp",
    author: "Michael Porter",
    image: "/favicon.png",
    siteUrl: "https://arbootcamp.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `filter-pages`,
        path: `${__dirname}/src/filters`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landing-pages`,
        path: `${__dirname}/src/landing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-pages`,
        path: `${__dirname}/src/blog`,
      },
    },
    "gatsby-plugin-sitemap",
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-173415966-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
