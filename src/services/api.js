import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.1.102:5432"
  baseURL: "http://localhost:5124"
});

export default api;
