import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.90.244:5124"
  baseURL: "http://localhost:5124"
});

export default api;
