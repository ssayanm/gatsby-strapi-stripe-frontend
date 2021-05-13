const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`);
  const blogPostPaginate = path.resolve("src/templates/blog-posts.js");
  const shopTemplate = path.resolve("src/templates/shop-template.js");

  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
      shop: allStrapiProducts {
        nodes {
          slug
        }
      }
    }
  `);

  const posts = result.data.blogs.nodes;
  const products = result.data.shop.nodes;

  paginate({
    createPage,
    items: result.data.blogs.nodes,
    itemsPerPage: 6,
    pathPrefix: "/blog-posts",
    component: blogPostPaginate,
  });

  posts.forEach((blog, index) => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: blogPostTemplate,
      context: {
        slug: blog.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });
  });

  products.forEach((product, index) => {
    createPage({
      path: `/products/${product.slug}`,
      component: shopTemplate,
      context: {
        slug: product.slug,
        prev: index === 0 ? null : products[index - 1].node,
        next: index === products.length - 1 ? null : products[index + 1].node,
      },
    });
  });
};
