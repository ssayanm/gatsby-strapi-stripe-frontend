import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Blogs from "../components/Blogs";
import Service from "../components/Service";
import MiniContact from "../components/MiniContact";
import Seo from "../components/Seo";

const index = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data;

  return (
    <Layout>
      <Seo
        title="Home"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <Hero />
      <Info />
      <Service />
      <Blogs
        blogs={blogs}
        title="latest articles"
        showLink
        className="blog-section"
      />
      <MiniContact />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "Do MMMM, YYYY")
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

export default index;
