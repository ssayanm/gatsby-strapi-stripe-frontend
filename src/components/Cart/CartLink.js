import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

const CartLink = () => {
  // const { cartItems } = useContext(CartContext);
  // console.log(cartItems);
  return (
    <div className="cart-link-container">
      <Link>
        Cart
        <span className="cart-link-total">10</span>
      </Link>
    </div>
  );
};

export default CartLink;
