import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useMyBookingServices = () => {
  const axiosSecure = useAxiosSecure();
  const myBookedServicesPromise = (email) => {
    return axiosSecure
      .get(`/orders-provider?email=${email}`)
      .then((res) => res.data);
  };
  return { myBookedServicesPromise };
};

export default useMyBookingServices;
