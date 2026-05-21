import axios from "axios";
import { API_BASE_URL } from "./API_URL";
import { attachApiRouteFallback } from "./axiosRouteFallback";

const api = axios.create({
  baseURL: API_BASE_URL
});

attachApiRouteFallback(api);

export default api;
