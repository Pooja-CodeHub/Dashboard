import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// LOGIN
export const loginUser = (data) => {
  return API.post("/auth/login", data);
};

// REGISTER
export const registerUser = (data) => {
  return API.post("/auth/register", data);
};
