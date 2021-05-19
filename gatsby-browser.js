import React from "react";
// import ProductProvider from "./src/context/products";
import CartProvider from "./src/context/cart";
// import UserProvider from "./src/context/user";
import "./src/scss/style.scss";

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
);
