import React, { useContext } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import Seo from "../components/Seo";
import MiniContact from "../components/MiniContact";
import { navigate } from "gatsby";
import { CartContext } from "../context/cart";

const ShopTemplate = ({ data }) => {
  const { description, title, shortdescription, price, image } = data.product;

  const { addToCart } = useContext(CartContext);

  return (
    <Layout>
      <Seo title={title} description={shortdescription} />
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
              <ReactMarkdown children={description} />
            </article>
            <button
              className="btn-secondary"
              onClick={() => {
                addToCart(data.product);
                navigate("/cart");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <MiniContact />
    </Layout>
  );
};

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: strapiProducts(slug: { eq: $slug }) {
      id
      description
      title
      shortdescription
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
