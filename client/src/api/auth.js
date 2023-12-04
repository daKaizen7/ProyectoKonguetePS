import axios from "./axios.js";

export const registerRequest = async (user) => axios.post(`register`, user);

export const loginRequest = async (user) => axios.post(`login`, user);

export const logoutRequest = async () => axios.post(`logout`);

export const profileRequest = async (user) => axios.get(`profile`, user);

export const verifyTokenRequest = async (user) => axios.get(`verify`);
