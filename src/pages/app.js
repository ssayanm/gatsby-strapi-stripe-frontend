import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import PrivateRoute from "../components/PrivateRoute";
import Checkout from "./checkout";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/checkout">
        <Checkout />
      </PrivateRoute>
    </Router>
  </Layout>
);

export default App;
