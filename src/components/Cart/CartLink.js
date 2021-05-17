import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

const CartLink = () => {
  // const { cartItems } = useContext(CartContext);
  // console.log(cartItems);
  return (
    <div className="cart-link-container">
      <span className="cart-link-total">10</span>
    </div>
  );
};

export default CartLink;
