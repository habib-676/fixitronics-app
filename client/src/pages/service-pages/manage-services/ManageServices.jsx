import React, { Suspense } from "react";
import useAuth from "../../../hooks/useAuth";
import MyServiceLists from "./MyServiceLists";
import { Helmet } from "react-helmet";
import useServices from "../../../apis/useServices";
const ManageServices = () => {
  const { user } = useAuth();
  const { myServicesPromise } = useServices();
  return (
    <div className="text-primary-content">
      <Helmet>
        <title>Manage services || Fixitronics</title>
      </Helmet>
      <Suspense fallback={"Loading..."}>
        <MyServiceLists
          myServicesPromise={myServicesPromise(user.email)}
        ></MyServiceLists>
      </Suspense>
    </div>
  );
};

export default ManageServices;
