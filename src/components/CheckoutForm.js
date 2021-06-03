import React, { useState, useContext } from "react";
// import styled from "styled-components";
// import { loadStripe } from "@stripe/stripe-js";
import CardSection from "./CardSection";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// import axios from "axios";

import Cookies from "js-cookie";

import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";

// import { navigate } from "gatsby-link";
import fetch from "isomorphic-fetch";

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  // const [token, setToken] = useState(null);

  // STRIPE STUFF
  // const [succeeded, setSucceeded] = useState(false);

  // const [processing, setProcessing] = useState("");
  // const [disabled, setDisabled] = useState(true);
  // const [clientSecret, setClientSecret] = useState("");

  const [data, setData] = useState({
    address: "",
    city: "",
    state: "",
    stripe_id: "",
  });

  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // console.log("API url", process.env.GATSBY_API_URL);

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value);
    // update the state data object
    setData({ ...data, updateItem });
  }

  async function submitOrder() {
    // event.preventDefault();

    // // Use elements.getElement to get a reference to the mounted Element.
    const cardElement = elements.getElement(CardElement);

    // // Pass the Element directly to other Stripe.js methods:
    // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
    // get token back from stripe to process credit card
    const token = await stripe.createToken(cardElement);

    const userToken = Cookies.get("token");

    const response = await fetch(`${process.env.GATSBY_API_URL}/orders`, {
      method: "POST",
      headers: userToken,
      body: JSON.stringify({
        total: total,
        items: cart.items,
        address: data.address,
        city: data.city,
        state: data.state,
        token: token.token.id,
      }),
    });

    if (!response.ok) {
      console.log(error);
      setError(response.statusText);
    }

    console.log("response", response);
  }

  return (
    <section className="section form">
      <form className="checkout-form">
        <h3>
          order total: <span>₹{total}</span>
        </h3>
        <div className="form-control">
          <label htmlFor="name">
            <address></address>
          </label>
          <input
            type="text"
            // id="address"
            // value={address}
            name="address"
            onChange={onChange}
            placeholder="address"
          />
        </div>
        <CardSection
          data={data}
          stripeError={error}
          submitOrder={submitOrder}
        />
      </form>
    </section>
  );
};

export default CheckoutForm;
