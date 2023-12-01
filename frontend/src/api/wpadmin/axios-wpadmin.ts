// Axios Imports
import axios, { AxiosError } from "axios";

export const axiosWpadmin = axios.create({
  baseURL: "/wp-admin/admin-ajax.php",
  timeout: 1000 * 60,
  withCredentials: true,
});

axiosWpadmin.interceptors.request.use((config) => config);
axiosWpadmin.interceptors.response.use(
  (res) => {
    const { data } = res;
    return data;
  },
  (err: AxiosError) => {
    const { message } = err;
    throw new Error(message);
  }
);
