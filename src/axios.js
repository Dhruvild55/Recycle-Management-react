import axios from "axios";
import { removeToken, navigationTo } from "../src/helper/helper";
import { ReactToastify } from "./shared/utils";

const selectedCulture = localStorage.getItem("language");

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Accept-Language": selectedCulture,
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error?.response?.status === 401) {
      removeToken();
      navigationTo({ to: "/login", replace: true });
      ReactToastify("token expired", "error");
      return Promise.reject(error);
    }
    if (error?.response?.status === 403) {
      removeToken();
      ReactToastify("Unauthorized user", "error");
      navigationTo({ to: "/login", replace: true });
      return Promise.reject(error);
    }
    if (error?.response?.status === 400) {
      console.log(error?.response?.data?.message);
      ReactToastify(error?.response?.data?.message, "error");
    }
    // return Promise.reject(error);
  }
);

export default axiosInstance;
