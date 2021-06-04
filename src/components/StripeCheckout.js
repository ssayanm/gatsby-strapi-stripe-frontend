import React, { useState, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import submitOrder from "../strapi/submitOrder";
import EmptyCart from "../components/cart/EmptyCart";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";

import { navigate } from "gatsby-link";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const Checkout = (props) => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, alert, showAlert, hideAlert } = useContext(UserContext);

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const isEmpty = !name || alert.show;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    showAlert({ msg: "submitting order..please wait" });
    e.preventDefault();

    const cardElement = elements.getElement(CardElement);
    const token = await stripe.createToken(cardElement);

    // const response = await fetch(`${process.env.GATSBY_API_URL}/orders`, {
    //   method: "POST",
    //   //   headers: userToken,
    //   body: JSON.stringify({
    //     total: total,
    //     items: cart.items,
    //   }),
    // }).catch((error) => console.log(error));

    const response = axios
      .post(`${process.env.GATSBY_API_URL}/orders`, {
        method: "POST",
        //   headers: userToken,
        body: JSON.stringify({
          total: total,
          items: cart.items,
        }),
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (token) {
      setError("");

      let order = await submitOrder({
        name: name,
        customer: name,
        total: total,
        items: cart,
        source: token.token.id,
        stripeTokenId: token.token.id,
        userToken: user.token,
      });

      if (order) {
        showAlert({ msg: "yor order is complete" });
        clearCart();
        navigate("/");
        return;
      } else {
        showAlert({
          msg: "there was an error with your order, please try again",
          type: "danger",
        });
      }
    } else {
      hideAlert();
      setError(response.error.message);
    }
  };

  if (cart.length < 1) return <EmptyCart />;
  return (
    <section className="section form">
      <form className="checkout-form">
        <h3>
          order total: <span>₹{total}</span>
        </h3>

        <div className="form-control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <CardElement className="card-element" />

        <div className="stripe-info">
          <label htmlFor="card-element">Credit or Debit Card</label>
          <p className="stripe-info">
            Test using credit card: <span>4242 42424 4242 4242</span>
            <br />
            enter any 5 digits for zip code
            <br />
            enter any 3 digits for cvc
          </p>
        </div>

        {error && <p className="form-empty">{error}</p>}
        {isEmpty ? (
          <p className="form-empty">please fill out name field</p>
        ) : (
          <button type="submit" onClick={handleSubmit} className="btn-checkout">
            submit
          </button>
        )}
      </form>
    </section>
  );
};

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default StripeCheckout;
