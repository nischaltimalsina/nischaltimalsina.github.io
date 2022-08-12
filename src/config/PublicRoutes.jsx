import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <>
      <div className="relative h-screen overflow-x-hidden no-scrollbar ">
      <Navbar />
      <Outlet />
      <Footer />
      </div>
    </>
  );
};

export default PublicRoutes;
