import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import { Bounce } from "react-reveal";

const Error = () => {
  return (
    <Layout>
      <Seo title="404 page" description="page not found" />
      <main className="error-page">
        <div className="error-container">
          <h1>
            <Bounce bottom cascade>
              Oops! its a dead end
            </Bounce>
          </h1>
          <Link to="/" className="btn-primary center-btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
