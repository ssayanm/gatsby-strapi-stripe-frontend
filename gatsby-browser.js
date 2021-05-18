import React from "react";
import ProductProvider from "./src/context/products";
import "./src/scss/style.scss";

export const wrapRootElement = ({ element }) => (
  <ProductProvider>{element}</ProductProvider>
);
