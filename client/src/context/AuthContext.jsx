import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth.js";


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
  const [errors, setErrors] = useState([]);

  const singup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  const singin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
    } catch (err) {
      if(Array.isArray(err.response.data)){      setErrors(err.response.data);
      }
      setErrors([err.response.data.message])
    }
  };

  useEffect(()=> {
    if (errors.length>1)  {
      const timer= setTimeout(() => {
        setErrors([])
      }, 5000);
      return () => clearTimeout(timer);
    }
  },[errors])
  return (
    <AuthContext.Provider
      value={{
        singup,
        singin,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
