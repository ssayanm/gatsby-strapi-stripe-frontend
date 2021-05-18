// import { Link } from "gatsby";
// import React, { useContext } from "react";
// import { CartContext } from "../context/cart";
// import { UserContext } from "../context/user";
// import EmptyCart from "../components/Cart/EmptyCart";
// import CartItem from "../components/Cart/CartItem";
// import Layout from "../components/Layout";
// import Seo from "../components/Seo";
// import TitleBar from "../components/TitleBar";

// const Cart = () => {
//   const { cart, total } = useContext(CartContext);
//   const { user } = useContext(UserContext);
//   if (cart.length === 0) {
//     return <EmptyCart />;
//   }
//   return (
//     <Layout>
//       <Seo
//         title="Cart"
//         description="Connecticut Certified Relationship Coach Pleasant Smith"
//       />
//       <TitleBar title="Cart Page" />
//       <section className="cart-items cart-section">
//         <h2>your cart</h2>
//         {cart.map((item) => {
//           return <CartItem key={item.id} {...item} />;
//         })}
//         <h2>Total: ₹{total}</h2>
//         {user.token ? (
//           <Link to="/checkout" className="btn btn-primary btn-block">
//             checkout
//           </Link>
//         ) : (
//           <Link to="/login" className="btn btn-primary btn-block">
//             login
//           </Link>
//         )}
//       </section>
//     </Layout>
//   );
// };

// export default Cart;

import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import TitleBar from "../components/TitleBar";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {
  return (
    <Layout>
      <Seo
        title="About Pleasant"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <TitleBar title="your cart" desc=" " />
      <section className="cart-items cart-section">
        <h2>your cart</h2>

        <h2>Total: ₹200</h2>
      </section>
    </Layout>
  );
};

export default Cart;
