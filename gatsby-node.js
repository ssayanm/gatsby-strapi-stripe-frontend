const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allStrapiProducts {
        nodes {
          slug
        }
      }
    }
  `)

  //   const makeRequest = (graphql, request)

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}
