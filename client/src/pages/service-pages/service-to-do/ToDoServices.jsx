import React, { Suspense } from "react";

import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet";
import ToDoServiceLists from "./ToDoServiceLists";
import useMyBookingServices from "../../../apis/useMyBookingServices";


const ToDoServices = () => {
  const { user } = useAuth();
  const {myBookedServicesPromise} = useMyBookingServices()
  return (
    <div className="text-primary-content">
      <Helmet>
        <title>Service-to-do || Service provider page</title>
      </Helmet>

      <Suspense fallback={"Loading..."}>
        <ToDoServiceLists
          myBookedServicesPromise={myBookedServicesPromise(user.email)}
        ></ToDoServiceLists>
      </Suspense>
    </div>
  );
};

export default ToDoServices;
