import React from "react";

import CartProvider from "./src/context/cart";
import UserProvider from "./src/context/user";
import Alert from "./src/components/Alert";
import "./src/scss/style.scss";

export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <Alert />
    <CartProvider>{element}</CartProvider>
  </UserProvider>
);
