import axios from "axios";
import Storage from "../Storage";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
});

const token = (Storage.get("token") as unknown | string) || "";

api.defaults.timeout = 2500;
// api.defaults.headers.post["Content-Type"] = "application/json";
// api.defaults.headers.post["Content-Type"] = "multipart/form-data";
api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
