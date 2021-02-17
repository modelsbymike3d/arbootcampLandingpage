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
    description: "The best place to learn how to create augmented reality experiences for Snapchat, Instagram, and Facebook",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletter`,
        path: `${__dirname}/src/newsletter`,
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                filter: { fileAbsolutePath: { glob: "**/src/newsletter/**/*.md" } }
                sort: { fields: [frontmatter___date], order: DESC }
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 280)
                    frontmatter {
                      title
                      path
                      date
                    }
                  }
                }
              }
            }
            `,
            output: "/newsletter.xml",
            title: "AR Bootcamp Newsletter RSS Feed",
          },
        ],
      },
    }
  ],
}
