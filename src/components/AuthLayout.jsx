import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AuthSliceSelector from "../../Store/authSlice";

export default function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const { status: authStatus } = useSelector(AuthSliceSelector);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/notes");
    }
  }, [authStatus, authentication, navigate]);

  return <>{children}</>;
}
