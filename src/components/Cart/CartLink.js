import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/cart";
import { StaticImage } from "gatsby-plugin-image";

const CartLink = () => {
  // const { cartItems } = useContext(CartContext);
  // console.log(cartItems);
  return (
    <div className="cart-container">
      <StaticImage
        src="../assets/shopping-bag.svg"
        alt="cart link"
        className="cart-img"
        width={50}
        layout="fixed"
      />
      <span className="cart-total">10</span>
    </div>
  );
};

export default CartLink;
