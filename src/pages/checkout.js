import React, { useContext, useState } from "react";

// import getStripe from "../utils/stripejs";

import { CardElement, Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

import { Link, navigate } from "gatsby";

import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";

import EmptyCart from "../components/cart/EmptyCart";
import submitOrder from "../strapi/submitOrder";
import Layout from "../components/Layout";
import TitleBar from "../components/TitleBar";

const stripePromise = loadStripe(
  "pk_test_51FojKOAvDjyZQBUKL1W7QM1RQITcKVCy4Yl8uM1H9a77obMyqasXv7FPYJJ4Zz1NHjqijIWRZxaf1626F4UcrfkY00iTX49CqM"
);

const Checkout = (props) => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, alert, showAlert, hideAlert } = useContext(UserContext);

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const isEmpty = !name || alert.show;

  const handleSubmit = async (e) => {
    showAlert({ msg: "submitting order..please wait" });
    e.preventDefault();
    const response = await props.stripe
      .createToken()
      .catch((error) => console.log(error));

    const { token } = response;
    if (token) {
      setError("");
      const { id } = token;
      let order = await submitOrder({
        name: name,
        total: total,
        items: cart,
        stripeTokenId: id,
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
    <Layout>
      <TitleBar title="checkout" desc=" " />
      {user.token ? (
        <section className="section form">
          <form className="checkout-form">
            <h3>
              order total: <span>${total}</span>
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
      ) : (
        <Link to="/login" className="btn-primary center-btn">
          login
        </Link>
      )}
    </Layout>
  );
};

// const CardForm = injectStripe(Checkout);

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default StripeWrapper;
