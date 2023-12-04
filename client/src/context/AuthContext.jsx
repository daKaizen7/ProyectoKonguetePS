import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  logoutRequest,
  profileRequest,
  verifyTokenRequest,
} from "../api/auth.js";

import Cookies from "js-cookie"; //Para leer la cookie y de esta manera el token

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const singup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
      setIsAllowed(false);
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  const singin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setIsAuthenticated(true);
      setUser(res.data);
      if ((res.data.role = "admin")) {
        setIsAllowed(true);
      }
    } catch (err) {
      if (Array.isArray(err.response.data)) {
        setErrors(err.response.data);
      } else {
        setErrors([err.response.data.message]);
      }
    }
  };

  const logout = async () => {
    try {
      const res = await logoutRequest(user);
      setIsAuthenticated(false);
    } catch (err) {
      if (Array.isArray(err.response.data)) {
        setErrors(err.response.data);
      } else {
        setErrors([err.response.data.message]);
      }
    }
  };

  const profile = async () => {
    try {
      const res = await profileRequest(user);
    } catch (err) {
      if (Array.isArray(err.response.data)) {
        setErrors(err.response.data);
      } else {
        setErrors([err.response.data.message]);
      }
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  //Al cargar la página nuevamente, el token debe estar guardado
  useEffect(() => {
    async function checkLogin(params) {
      const cookies = Cookies.get();
      //Si no hay un token
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      }

      //Si hay un token válido
      try {
        const res = await verifyTokenRequest(cookies.token); //Enviar el token que se encontró al backend

        //Si la respuesta no tiene datos
        if (!res.data) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          return;
        }

        //Si la respuesta tiene datos
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);

        //Si hay un error
      } catch (err) {
        console.log(err);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }

    checkLogin();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        singup,
        singin,
        user,
        isAuthenticated,
        errors,
        logout,
        loading,
        profile,
        isAllowed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
