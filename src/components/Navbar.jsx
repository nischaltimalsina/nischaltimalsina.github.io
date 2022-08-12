import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/1.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const activeClasses = ({ isActive }) =>
    [` hover:font-normal hover:mr-2 hover:duration-200 ease-in-out`, isActive ? " text-blue-400" : ""].filter(Boolean).join(" ");

  return (
    <div className="mx-auto z-20 relative h-20 max-w-[1440px]   flex items-end justify-between px-8 large:px-20 pb-4 ">
      <div className=" flex justify-center h-10 items-center">
        <a href="/">
          <img
            src={Logo}
            className="h-10  object-cover"
            alt="Nischal Timalsina"
          />
        </a>
      </div>
      <div>
        <ul
          className={`hidden large:flex gap-5  font-extralight`}
        >
          <li>
            <NavLink className={activeClasses}  to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClasses} to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink className={activeClasses} to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink className={activeClasses} to={"/portfolio"}>Portfolio</NavLink>
          </li>
          <li className="dropdown ">
            <NavLink className={activeClasses}  to="/services">Services</NavLink>
            <div className="dropdown-item right-0">
              <ul
                id="dropdown"
                className=" space-y-3 w-64  bg-zinc-800/50 border-[0.5px] border-zinc-400 backdrop-blur-md text-start mt-5   p-6 rounded-lg "
              >
                <li>
                  <NavLink className={activeClasses} to="/saas">SaaS</NavLink>
                </li>
                <li>
                  <NavLink className={activeClasses} to="/web-development">Web Development</NavLink>
                </li>
                <li>
                  <NavLink className={activeClasses} to="/mobile-development">Mobile Application</NavLink>
                </li>
                <li>
                  <NavLink className={activeClasses} to="/resume-maker">Resume Maker</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink className={activeClasses} to={"/gallery"}>Gallery</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-end large:hidden  ">
        <ul
          className={`  ${
            toggle ? "" : " translate-x-[3000%] "
          } absolute rounded-lg  flex flex-col h-auto max-w-[70%]  right-4 top-4 pl-16 pr-32 py-32 bg-zinc-500/10 backdrop-blur-sm gap-8  font-extralight ease-in-out duration-300 isolate `}
        >
          <li>
            <NavLink
              to={"/"}
              onClick={() => setToggle((prevToggle) => !prevToggle)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              onClick={() => setToggle((prevToggle) => !prevToggle)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              onClick={() => setToggle((prevToggle) => !prevToggle)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/portfolio"}
              onClick={() => setToggle((prevToggle) => !prevToggle)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/gallery"}
              onClick={() => setToggle((prevToggle) => !prevToggle)}
            >
              Gallery
            </NavLink>
          </li>
        </ul>
        <div>
          <button
            className="large:hidden "
            onClick={() => setToggle((prevToggle) => !prevToggle)}
          >
            <div className=" h-10 flex flex-col justify-center gap-1.5 isolate z-50">
              <div
                className={`${
                  toggle
                    ? "rotate-45 translate-y-1 duration-300"
                    : "duration-300"
                }   w-8 h-0.5 bg-white`}
              ></div>
              <div
                className={`${
                  toggle ? " hidden" : "block delay-300 duration-300"
                } w-6 h-0.5 bg-white`}
              ></div>
              <div
                className={`${
                  toggle
                    ? "-rotate-45 -translate-y-1 duration-300"
                    : "duration-300"
                }  w-8 h-0.5 bg-white`}
              ></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
