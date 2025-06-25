import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useServices = () => {
  const axiosSecure = useAxiosSecure();
  const myServicesPromise = (email) => {
    return axiosSecure(`/allServices?email=${email}`).then((res) => res.data);
  };
  return { myServicesPromise };
};

export default useServices;
