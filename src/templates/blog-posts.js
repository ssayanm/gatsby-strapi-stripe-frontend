import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/blog/Blogs";
import Seo from "../components/Seo";
import Pager from "../components/Pager";

import MiniContact from "../components/MiniContact";

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
  pageContext,
  location,
}) => {
  return (
    <Layout location={location}>
      <Seo
        title="The Pleasant Blog"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />

      <section className="blog-page">
        <Blogs blogs={blogs} title="The Pleasant Blog" />
        <Pager pageContext={pageContext} />
      </section>
      <MiniContact />
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiBlogs(
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        slug
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        author
        image {
          childImageSharp {
            gatsbyImageData(width: 1920, quality: 100, formats: [AUTO])
          }
        }
      }
    }
  }
`;

export default Blog;
