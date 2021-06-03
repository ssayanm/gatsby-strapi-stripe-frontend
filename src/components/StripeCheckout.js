import React, { useState, useContext } from "react";
import styled from "styled-components";
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

    const response = await fetch(`${process.env.GATSBY_API_URL}/orders`, {
      method: "POST",
      //   headers: userToken,
      body: JSON.stringify({
        total: total,
        items: cart.items,
      }),
    }).catch((error) => console.log(error));

    // const { token } = response;

    if (token) {
      setError("");

      console.log("token", token);
      console.log("userToken", token.token.id);
      let order = await submitOrder({
        name: name,
        customer: name,
        total: total,
        items: cart,
        source: token.token.id,
        stripeTokenId: token.token.id,
        userToken: user.token,
      });

      console.log("order", order);

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
      <h2 className="section-title">checkout</h2>

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
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            submit
          </button>
        )}
      </form>
    </section>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* form {
    width: 30vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  } */
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;

export default StripeCheckout;
