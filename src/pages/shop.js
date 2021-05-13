import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Products from "../components/Products";
import Seo from "../components/Seo";
import MiniContact from "../components/MiniContact";

const Shop = ({
  data: {
    allStrapiProducts: { nodes: products },
  },
}) => {
  return (
    <Layout>
      <Seo title="Shop" description="We are All about Car Care" />
      <section className="shop-page">
        <Products products={products} title="our shop" />
      </section>
      <MiniContact />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProducts {
      nodes {
        slug
        description
        price
        id
        title
        category
        image {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`;

export default Shop;
