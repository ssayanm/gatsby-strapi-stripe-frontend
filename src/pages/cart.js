import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

import Seo from "../components/Seo";
import TitleBar from "../components/TitleBar";
import CartItem from "../components/Cart/CartItem";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import EmptyCart from "../components/Cart/EmptyCart";

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
      <main className="cart-items cart-section">
        <h2>your cart</h2>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <h2>Total: ₹{total}</h2>
      </main>
    </Layout>
  );
};

export default Cart;

//  <Link to="/contact" className="btn-primary center-btn">
// back home
// </Link>
