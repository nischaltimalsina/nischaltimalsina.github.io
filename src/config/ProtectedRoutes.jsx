import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let user;
  return  user ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/" ></Navigate>
  );
};

export default ProtectedRoutes;
