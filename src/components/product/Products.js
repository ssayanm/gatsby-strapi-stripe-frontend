import React from "react";
import Title from "../Title";
import Product from "./Product";
import { Fade } from "react-reveal";

export const Products = ({ products, title, showLink }) => {
  return (
    <section className="section shop-section">
      <Fade bottom>
        <Title title={title} />

        <div className="section-center shop-center">
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </Fade>
    </section>
  );
};
export default Products;
