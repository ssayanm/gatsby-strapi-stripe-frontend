import React from "react";
import { Link } from "gatsby";

const EmptyCart = () => {
  return (
    <section className="empty-cart section">
      <h2>your cart is empty...</h2>
      <Link to="/shop" className="btn-primary">
        fill it
      </Link>
    </section>
  );
};

export default EmptyCart;
