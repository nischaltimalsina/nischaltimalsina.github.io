import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-screen  bg-zinc-700 py-6">
      <div className=" max-w-[1440px] mx-auto px-10 large:px-20 ">
        <div className="grid grid-cols-12 large:gap-10 my-6 ">
          <div className="col-span-12 large:col-span-5  leading-9">
            <h1 className="text-xl uppercase font-extralight mb-6 tracking-widest">
              About
            </h1>
            <p className="text-xs  large:leading-relaxed large:text-sm font-thin text-justify tracking-wide">
              I am NISCHAL TIMLASINA, a FrontEnd Developer with a keen eye for
              clean, modern and minimal designs. I believe that products must be
              designed for the convenience of their users and not the makers. I
              work with
              <strong className="text-blue-400 mx-1">
                ReactJs, React Native and NodeJs.
              </strong>
            </p>
            <NavLink className="" to="/">
              <p className="mb-8 large:mb-0 flex justify-center items-center h-8 w-32 mt-4 text-base font-thin hover:font-light bg-amber-600 opacity-100 hover:bg-opacity-75  rounded-xl  uppercase ease-in-out duration-100">
                Message
              </p>
            </NavLink>
          </div>
          <div className="col-span-6 large:col-span-4">
            <h1 className="text-xl uppercase font-extralight mb-6 tracking-widest">
              Categories
            </h1>
            <ul className="text-xs large:text-sm font-extralight tracking-widest  space-y-3 ">
              <li>
                <NavLink to={"/"}>SaaS</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>UI Designs</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Web Development</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"}>Mobile Application </NavLink>
              </li>
              <li>
                <NavLink to={"/gallery"}>Resume Maker</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-6 large:col-span-3">
            <h1 className="text-xl uppercase font-extralight mb-6 tracking-widest">
              Links
            </h1>
            <ul className="text-xs large:text-sm font-extralight tracking-widest  space-y-3 ">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About Me</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact Me</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"}>Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to={"/gallery"}>Sitemap</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-4 border-t-[0.5px] pt-6">
          <p className="col-span-2 text-sm  text-start font-thin">
            &copy; Copyright 2022. <br className="medium:hidden  " /> Nischal
            Timalsina
          </p>
          <div className="col-span-2 ">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SocialIcons = () => {
  return (
    <div className="flex flex-wrap justify-end gap-3">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/nischaltimalsina"
        className="rounded-full border p-2 text-gray-300 hover:text-white focus:text-white focus:bg-purple-700 hover:bg-purple-700 hover:opacity-75 focus:opacity-75  hover:border-0 focus:border-transparent ease-in-out duration-100"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/nischaltimalcna/"
        className="rounded-full border p-2 text-gray-300 hover:text-white focus:text-white focus:bg-blue-700 hover:bg-blue-700 hover:opacity-75 focus:opacity-75  hover:border-0 focus:border-transparent ease-in-out duration-100"
      >
        <FaFacebookF />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/nischaltimalcna"
        className="rounded-full border p-2 text-gray-300 hover:text-white focus:text-white focus:bg-pink-600 hover:bg-pink-600 hover:opacity-75 focus:opacity-75  hover:border-0 focus:border-transparent ease-in-out duration-100"
      >
        <FaInstagram />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.twitter.com/thelunaticlad"
        className="rounded-full border p-2 text-gray-300 hover:text-white focus:text-white focus:bg-sky-500 hover:bg-sky-500 hover:opacity-75 focus:opacity-75  hover:border-0 focus:border-transparent ease-in-out duration-100"
      >
        <FaTwitter />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/channel/UCCD6hbD_scFwzgtqGJQeCng"
        className="rounded-full border p-2 text-gray-300 hover:text-white focus:text-white focus:bg-red-700 hover:bg-red-700 hover:opacity-75 focus:opacity-75  hover:border-0 focus:border-transparent ease-in-out duration-100"
      >
        <FaYoutube />
      </a>
    </div>
  );
};
