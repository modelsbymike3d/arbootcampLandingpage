const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const landingPageTemplate = path.resolve(
    `src/components/landingPageLayout.js`
  )
  const blogPageTemplate = path.resolve(`src/components/blogLayout.js`)
  const filtersPageTemplate = path.resolve(
    "src/components/filtersPageLayout.js"
  )

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/landing/**/*.md" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const blogList = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/blog/**/*.md" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const filtersList = await graphql(`
    query {
      allFiltersJson(filter: {}) {
        edges {
          node {
            path
            id
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query for landing pages.`
    )
    return
  }

  if (blogList.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for blog pages.`)
    return
  }

  if (filtersList.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query for filters pages.`
    )
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: landingPageTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  blogList.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPageTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  filtersList.data.allFiltersJson.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: filtersPageTemplate,
      context: {},
    })
  })
}
