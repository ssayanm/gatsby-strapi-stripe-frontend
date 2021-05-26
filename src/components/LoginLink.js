import React, { useContext } from "react";
import { Link } from "gatsby";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";

const LoginLink = () => {
  const { user, userLogout } = useContext(UserContext);
  const { clearCart } = useContext(CartContext);
  if (user.token) {
    return (
      <section
        className="login-btn"
        // className="btn-login"
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        logout
      </section>
    );
  }
  return (
    <Link to="/login" className="btn-login">
      Login
    </Link>
  );
};

export default LoginLink;
