import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

import Seo from "../components/Seo";
import TitleBar from "../components/TitleBar";
import CartItem from "../components/cart/CartItem";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import EmptyCart from "../components/cart/EmptyCart";

const Cart = () => {
  const { cart, total } = useContext(CartContext);
  const { user } = useContext(UserContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <Layout>
      <Seo
        title="About Pleasant"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <TitleBar title="your cart" desc=" " />
      <section className="cart-items cart-section">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <h2>Total: ${total}</h2>
        {user.token ? (
          <Link to="/checkout" className="btn-primary center-btn">
            checkout
          </Link>
        ) : (
          <Link to="/login" className="btn-primary center-btn">
            login
          </Link>
        )}
      </section>
    </Layout>
  );
};

export default Cart;

// {user.token ? (
//   <Link to="/checkout" className="center-btn btn-primary btn-block">
//     checkout
//   </Link>
// ) : (
//   <Link to="/login" className="center-btn btn-primary btn-block">
//     login
//   </Link>
// )}
