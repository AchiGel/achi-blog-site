import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "../main";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoutes = () => {
  const { auth } = useContext(Context)!;

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
