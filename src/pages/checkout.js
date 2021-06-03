import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import TitleBar from "../components/TitleBar";
import StripeCheckout from "../components/CheckoutForm";
import { CartContext } from "../context/cart";
import EmptyCart from "../components/cart/EmptyCart";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

  return (
    <Layout>
      <Seo
        title="Checkout Page"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <TitleBar title="Checkout" desc=" " />
      {cart.length < 1 ? (
        <EmptyCart />
      ) : (
        <Elements stripe={stripePromise}>
          <StripeCheckout />
        </Elements>
      )}
    </Layout>
  );
};

export default Checkout;
