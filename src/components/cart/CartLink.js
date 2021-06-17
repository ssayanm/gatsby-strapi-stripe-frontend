import React, { useContext } from "react";
import { Link } from "gatsby";
import { CartContext } from "../../context/cart";
import { StaticImage } from "gatsby-plugin-image";

const CartLink = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cart-container">
        <StaticImage
          src="../../assets/shopping-bag.svg"
          alt="cart link"
          className="cart-img"
          width={50}
          layout="fixed"
        />
        <span className="cart-total">{cartItems}</span>
      </div>
    </Link>
  );
};

export default CartLink;
