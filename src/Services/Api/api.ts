// import axios from "axios";
// import Storage from "../Storage";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_REACT_API_URL,
// });

// const token = (Storage.get("token") as unknown | string) || "";

// api.defaults.timeout = 2500;
// api.defaults.headers.post["Content-Type"] = "application/json";
// // api.defaults.headers.post["Content-Type"] = "multipart/form-data";
// api.defaults.headers.common["Authorization"] = `Bearer ${
//   JSON.parse(token as any).access_token
// }`;
// axios.interceptors.request.use(
//   (request) => {
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default api;

// *

import axios from "axios";
import Storage from "../Storage";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
  timeout: 2500,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});

const token = Storage.get("token");
let accessToken = "";

try {
  accessToken = token ? JSON.parse(token).access_token : "";
} catch (error) {
  console.error("Error parsing token:", error);
}

if (accessToken) {
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

api.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API response error:", error);
    return Promise.reject(error);
  }
);

export default api;
