import React from "react";

import CartProvider from "./src/context/cart";
import UserProvider from "./src/context/user";
import "./src/scss/style.scss";

export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <CartProvider>{element}</CartProvider>
  </UserProvider>
);
