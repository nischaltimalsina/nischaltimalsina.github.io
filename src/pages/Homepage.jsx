import React from "react";
import Picture from "../assets/images/face2.png";

const Homepage = () => {
  return (
    <div className="p-8 mt-10">
      <div className="flex flex-wrap large:flex-nowrap justify-around items-start ">
        <img src={Picture} className="h-72 medium:h-96 duration-500 mx-10 medium:mr-0" alt=""  />
        <div className="flex flex-col ">
        <h1 className="uppercase text-5xl large:text-7xl duration-500 mt-20">
          HELLO,
          <br  className="hidden large:block "/> Stranger..
        </h1>
        <p> </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
