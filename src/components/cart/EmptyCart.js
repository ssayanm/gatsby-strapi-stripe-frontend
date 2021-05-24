import React from "react";
import { Link } from "gatsby";
import Layout from "../Layout";
import MiniContact from "../../components/MiniContact";

const EmptyCart = () => {
  return (
    <Layout>
      <section className="empty-cart section">
        <h2>your cart is empty...</h2>
        <Link to="/shop" className="btn-primary">
          fill it
        </Link>
      </section>
      <MiniContact />
    </Layout>
  );
};

export default EmptyCart;
