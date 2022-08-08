import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" relative h-20 flex items-end justify-between px-8 pb-4">
      <div className=" gap-5 flex  items-end">
        <img
          src={require("../assets/images/1.png")}
          className=" h-10 "
          alt="Logo"
        />
      </div>
      <div><ul className={`hidden lg:flex gap-5  font-extralight ease-in-out duration-300 `}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </li>
        </ul></div>
      <div className="flex items-end lg:hidden " >

      <ul className={`  ${toggle?"":"translate-x-[300%]"} absolute  flex flex-col h-screen w-64  right-0 top-0 px-14 py-32 bg-white/10 gap-8  font-extralight ease-in-out duration-300 `}>
      <li>
            <NavLink to={"/"} onClick={()=>setToggle(prevToggle=>!prevToggle)}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"} onClick={()=>setToggle(prevToggle=>!prevToggle)}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} onClick={()=>setToggle(prevToggle=>!prevToggle)}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"} onClick={()=>setToggle(prevToggle=>!prevToggle)}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={"/gallery"} onClick={()=>setToggle(prevToggle=>!prevToggle)}>Gallery</NavLink>
          </li>
        </ul>
        <div>
            <button className="lg:hidden items-end" onClick={()=>setToggle(prevToggle=>!prevToggle)}>
          <div className=" h-10 flex flex-col justify-end gap-1.5 isolate z-50">
            <div className={`${toggle? "rotate-45 translate-y-1 duration-300":"duration-300"}   w-8 h-0.5 bg-white`}></div>
            <div className={`${toggle? " hidden":"block delay-300 duration-300"} w-6 h-0.5 bg-white`}></div>
            <div className={`${toggle? "-rotate-45 -translate-y-1 duration-300":"duration-300"}  w-8 h-0.5 bg-white`}></div>
          </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
