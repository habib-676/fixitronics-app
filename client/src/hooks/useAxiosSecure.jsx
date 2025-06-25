import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_hostUrl,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOutUser } = useAuth();

  //   intercept response
  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.status == 401 || err.status == 403) {
        logOutUser().then(() => {
          alert(`You are logged out for ${err.status} error`);
        });
      }
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
