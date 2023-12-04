//Para las rutas protegidas

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export const ProtectedAdminRoute = () => {
  const { isAllowed } = useAuth();
  console.log(isAllowed);

  if (isAllowed) return <Navigate to="/" replace />;
  else return <Outlet />;
};
