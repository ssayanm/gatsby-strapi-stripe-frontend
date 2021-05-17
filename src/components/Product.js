import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Product = ({ id, title, image, price, slug, shortdescription }) => {
  return (
    <Link to={`/products/${slug}`} key={id} className="shop">
      <article className="shop">
        <div className="image-box">
          {image && (
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={title}
              className="shop-img"
            />
          )}
        </div>

        <div className="shop-card">
          <h4>{title}</h4>
          <p>{shortdescription}</p>
          <div className="shop-footer">
            <p>${price}</p>
            <button
              className="snipcart-add-item btn-secondary"
              data-item-id={id}
              data-item-price={price}
              data-item-url={`/products/${slug}`}
              data-item-description={shortdescription}
              data-item-image={image.childImageSharp.gatsbyImageData}
              data-item-name={title}
            >
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shortdescription: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

export default Product;
