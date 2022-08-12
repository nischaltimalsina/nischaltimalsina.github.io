import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
const NotFound = () => {
  const location = window.location.href;
  return (
    <div className=" max-w-[900px] mx-auto mb-10  text-center">
      <h1 className="text-9xl mt-64">404</h1>
      <p className="text-xl font-thin">I can't seem to find the page you are looking for.  Sorry about that.</p>
      <p className="text-red-500 saturate-50 font-thin ">
        Error at : {location}
      </p>
      <p className="mt-6 mb-16 font-thin">The link you followed may be broken, or the page you requested  may have been removed.</p>
      <a href="/" className="flex flex-col justify-center font-thin text-emerald-600 mb-64 items-center">
        <p>Go back to Homepage</p>
        <IoReturnUpBack size={35}/>
      </a>
    </div>
  );
};

export default NotFound;
