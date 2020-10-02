const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const landingPageTemplate = path.resolve(
    `src/components/landingPageLayout.js`
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

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: landingPageTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
