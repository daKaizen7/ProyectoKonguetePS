import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const { logout, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    logout();
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);
}

export default Logout;
