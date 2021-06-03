import React from "react";
import { Link } from "gatsby";

import MiniContact from "../../components/MiniContact";

const EmptyCart = () => {
  return (
    <div>
      <section className="empty-cart section">
        <h2>your cart is empty...</h2>
        <Link to="/shop" className="btn-primary">
          fill it
        </Link>
      </section>
      <MiniContact />
    </div>
  );
};

export default EmptyCart;
