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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-youtube-link`,
            options: {
              width: 512,
              className: `youtube-thumbnail`,
              title: `Click to watch video on youtube.com`,
            },
          },
        ],
      },
    },
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
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `arbootcamp.com`,
      },
    },
  ],
}
