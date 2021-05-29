import React, { useContext } from "react";
import { Link } from "gatsby";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";

const LoginLink = () => {
  const { user, userLogout } = useContext(UserContext);
  const { clearCart } = useContext(CartContext);
  if (user.token) {
    return (
      <div
        className="login-btn"
        onClick={() => {
          userLogout();
          clearCart();
        }}
        onKeyDown={() => {
          userLogout();
          clearCart();
        }}
        role="button"
        tabIndex="0"
      >
        logout
      </div>
    );
  }
  return (
    <Link to="/login" className="login-btn">
      Login
    </Link>
  );
};

export default LoginLink;
