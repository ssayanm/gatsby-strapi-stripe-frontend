import React, { useContext } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import TitleBar from "../components/TitleBar";
import StripeCheckout from "../components/StripeCheckout";
import { CartContext } from "../context/cart";
import EmptyCart from "../components/cart/EmptyCart";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <Layout>
      <Seo
        title="Checkout Page"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <TitleBar title="Checkout" desc=" " />
      {cart.length < 1 ? <EmptyCart /> : <StripeCheckout />}
    </Layout>
  );
};

export default Checkout;
