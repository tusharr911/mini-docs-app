// src/components/PrivateRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AuthSliceSelector } from "../../Store/authSlice";
const AuthLayout = ({ children }) => {
  const { status } = useSelector(AuthSliceSelector);

  return status ? children : <Navigate to="/login" />;
};

export default AuthLayout;
