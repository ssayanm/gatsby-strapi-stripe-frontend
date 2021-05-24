import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
// import { useParams, useHistory } from "react-router-dom";
import { navigate } from "gatsby";
import { CartContext } from "../../context/cart";

const Product = (product) => {
  // const { id } = useParams();
  // const history = useHistory();
  const { addToCart } = useContext(CartContext);
  // const prod = products.find((item) => item.id === parseInt(id));

  const { id, title, image, price, slug, shortdescription } = product;

  return (
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
        <p>${price}</p>
        <div className="shop-footer">
          <Link to={`/products/${slug}`} key={id} className="btn-secondary-alt">
            {" "}
            View Details
          </Link>
          <button
            className="btn-secondary"
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
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
