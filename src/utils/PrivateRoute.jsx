import { redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  console.log("Private Route");
  return <Route {...rest}>{children}</Route>;
}

export default PrivateRoute;
