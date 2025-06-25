import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useBookings = () => {
  const axiosSecure = useAxiosSecure();
  const myBookingsPromise = (email) => {
    return axiosSecure.get(`/orders?email=${email}`).then((res) => res.data);
  };
  return { myBookingsPromise };
};

export default useBookings;
