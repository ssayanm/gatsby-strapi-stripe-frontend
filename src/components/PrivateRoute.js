// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { UserContext } from "../context/user";

// export default function PrivateRoute({ children, ...rest }) {
//   const { user } = React.useContext(UserContext);

//   return (
//     <Route
//       {...rest}
//       render={() => {
//         return user.token ? children : <Redirect to="/login"></Redirect>;
//       }}
//     ></Route>
//   );
// }

import React from "react";
import { navigate } from "gatsby";
// import { isLoggedIn } from "../services/auth";
import { UserContext } from "../context/user";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user } = React.useContext(UserContext);
  if (!user.token && location.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
