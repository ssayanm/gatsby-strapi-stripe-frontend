// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "../components/CheckoutForm";
// import Layout from "../components/Layout";
// import TitleBar from "../components/TitleBar";

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // loadStripe is initialized with a fake API key.
// // Sign in to see examples pre-filled with your key.
// const promise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

// const mycheckout = () => {
//   return (
//     <Layout>
//       <TitleBar title="checkout" desc=" " />
//       <Elements stripe={promise}>
//         <CheckoutForm />
//       </Elements>
//     </Layout>
//   );
// };

// export default mycheckout;
