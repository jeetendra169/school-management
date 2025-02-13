import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ allowedRoles, children }) => {
  const { role } = useAuth();

  return allowedRoles.includes(role) ? children : <Navigate to="/unauthorized" />;
};

export default PrivateRoute;
