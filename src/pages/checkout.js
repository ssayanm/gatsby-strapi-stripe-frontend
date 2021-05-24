import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import { navigate } from "gatsby";
import EmptyCart from "../components/cart/EmptyCart";
import submitOrder from "../strapi/submitOrder";

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

  return <div>Checkout</div>;
};

export default Checkout;
