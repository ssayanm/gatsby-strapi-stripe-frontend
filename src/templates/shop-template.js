import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import Seo from "../components/Seo";

const ShopTemplate = ({ data }) => {
  const { id, content, title, desc, price, image } = data.product;
  return (
    <Layout>
      <Seo title={title} description={desc} />
      <section className="shop-template">
        <div className="section-center shop-box">
          <div className="shop-image">
            {image && (
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt="Matt"
              />
            )}
          </div>
          <div className="shop-content">
            <h3>{title}</h3>
            <p>${price}</p>
            <article>
              <ReactMarkdown children={content} />
            </article>
            <button
              className="snipcart-add-item btn"
              data-item-id={id}
              data-item-price={price}
              data-item-url="/"
              data-item-description={desc}
              data-item-image={image.childImageSharp.gatsbyImageData}
              data-item-name={title}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: strapiProducts(slug: { eq: $slug }) {
      id
      content
      title
      description
      price
      image {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, formats: [AUTO])
        }
      }
    }
  }
`;

export default ShopTemplate;
