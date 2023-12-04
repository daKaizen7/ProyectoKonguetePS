import axios from "./axios.js";

export const getUsersRequest = async () => axios.get("admin");

export const createUserRequest = async (user) => axios.post("admin", user);

export const updateUserRequest = async (id, user) =>
  axios.put(`admin/${id}`, user);

export const deleteUserRequest = async (id) => axios.delete(`admin/${id}`);

export const getUserRequest = async (id) => axios.get(`admin/${id}`);
