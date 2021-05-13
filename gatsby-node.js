const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require("gatsby-awesome-pagination");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`);
  const blogPostPaginate = path.resolve("src/templates/blog-posts.js");

  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `);

  const posts = result.data.blogs.nodes;

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
};

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     });
//   }
// };
