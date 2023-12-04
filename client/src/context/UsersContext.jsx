import { createContext, useState, useContext, useEffect } from "react";
import {
  getUsersRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest,
  getUserRequest,
} from "../api/admin.js";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [users, setUser] = useState(null);
  const [errors, setErrors] = useState([]);

  const getUsers = async () => {
    try {
      const res = await getUsersRequest();
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = async (user) => {
    try {
      const res = await createUserRequest(user);
      console.log(res.data);
      setUser(res.data);
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await deleteUserRequest(id);
      if (res.status === 204) setUser(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (id) => {
    try {
      const res = await getUserRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id, user) => {
    try {
      const res = await updateUserRequest(id, user);
      if (res.status === 200) setUser(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
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
  return (
    <UserContext.Provider
      value={{
        createUser,
        getUsers,
        deleteUser,
        getUser,
        updateUser,
        errors,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
