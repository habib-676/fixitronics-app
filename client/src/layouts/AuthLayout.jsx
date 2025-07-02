import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-11/12 mx-auto min-h-[80vh]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
