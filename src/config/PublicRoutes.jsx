import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <>
      <div className="w-full h-[100vh] overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
      </div>
    </>
  );
};

export default PublicRoutes;
