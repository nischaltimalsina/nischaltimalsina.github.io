import React from "react";
import Picture from "../assets/images/face2.png";
import {
  CSSLogo,
  JsLogo,
  MongoLogo,
  NodeJsLogo,
  ReactLogo,
  TailwindLogo,
  BootstrapLogo,
  HtmlLogo,
  Website,
  Iphone,
} from "../assets/images/index";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Homepage = () => {
  return (
    <>
      <div className="p-8 max-w-[1440px] mx-auto ">
        <div className=" max-w-[1100px] overflow-hidden mx-auto flex flex-wrap large:flex-nowrap justify-around items-end mb-10 large:mb-24">
          <img
            src={Picture}
            className="h-72  large:h-[28rem] duration-300 mx-10 medium:mr-0"
            alt=""
          />
          <div className="flex flex-col gap-4 justify-start  text-center large:text-start  large:max-w-[50%] larger:max-w-[40%]">
            <h1 className="uppercase font-thin text-4xl large:text-7xl duration-500 mt-20">
              HELLO,
              <br className="hidden large:block " /> Stranger..
            </h1>
            <p className="text-xl font-thin">
              I am{" "}
              <span className="text-12xl medium:text-3xl ml-2">
                {" "}
                NISCHAL TIMALSINA,
              </span>
            </p>
            <p className="text-sm medium:text-lg font-light text-center large:text-start leading-8 text-yellow-500/60">
              a
              <span className="text-white text-lg medium:text-2xl mx-2">
                FrontEnd Developer
              </span>
              with a keen eye for clean, modern and minimal designs. I believe
              that products must be designed for the conveineince of their users
              and not the makers.
              <br /> I work with
              <strong className="text-blue-400 text-2xl "> ReactJs, </strong>
              <strong className="text-gray-400 text-2xl ">
                {" "}
                React Native,{" "}
              </strong>
              and{" "}
              <strong className="text-emerald-500 text-2xl ">NodeJs. </strong>
            </p>
            <p className="font-extralight text-xl">Follow Me</p>
            <SocialIcons />
          </div>
        </div>
        <div>
          <div className="text-center large:text-start medium:px-10 mb-14">
            <h1 className="text-2xl medium:text-3xl uppercase font-thin mb-10 py-4 border-b ">
              Design Philosophy
            </h1>
            <p className="font-extralight text-sm large:text-base leading-7 ">
              Inspiration can be found everywhere, whether that is from the
              environment that we live in or our imagination. Understanding the
              nature of design processes for building better user interface for
              enhanced user experience can be considered one of the most
              critical aspect of frontend design. An important thing to consider
              while we design anything, from a simple webpage to a complete
              application is the simplicity and inclusivity of usage and
              accessibility. A design must be understood without having to touch
              a button. It must be self explainable. <br /> <br />
              Another thing to consider is that a minimalistic approach in
              design helps prevent the end user from getting overwhelmed with
              the amount of options one has to shuffle through. A clutter is a
              tough thing to deal with, be that at your home or in your design.
              A self explainable, clean and clutter free design is the way to
              modern looking products with a higher probability of user
              interaction leading to better conversion rates.
            </p>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto text-center large:text-start medium:px-10">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-14 justify-center items-center my-10 ">
            <div className="flex flex-col justify-center items-center">
              <img
                src={JsLogo}
                className="h-16 object-contain "
                alt="JavaScript"
              />
              <p className="font-light  mt-3 text-sm">Javascript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={HtmlLogo} className="h-16 object-contain " alt="HTML" />
              <p className="font-light mt-3 text-sm">HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={CSSLogo} className="h-16 object-contain " alt="CSS" />
              <p className="font-light mt-3 text-sm">CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={ReactLogo}
                className="h-16 object-contain "
                alt="React"
              />
              <p className="font-light mt-3 text-sm">ReactJS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={NodeJsLogo}
                className="h-16 object-contain "
                alt="NodeJs"
              />
              <p className="font-light mt-3 text-sm">NodeJS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={ReactLogo}
                className="h-16 object-contain invert saturate-50 brightness-50 contrast-200"
                alt="React"
              />
              <p className="font-light mt-3 text-sm">React Native</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={MongoLogo}
                className="h-16 object-contain "
                alt="MongoDB"
              />
              <p className="font-light mt-3 text-sm">MongoDB</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={BootstrapLogo}
                className="h-14 object-contain"
                alt="Bootstrap"
              />
              <p className="font-light mt-3 text-sm">Bootstrap</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={TailwindLogo}
                className="h-14 object-contain"
                alt="TailwindCSS"
              />
              <p className="font-light mt-3 text-sm">Tailwind CSS</p>
            </div>
          </div>
          <h1 className="font-extralight mb-10">
            Above are the frameworks that I am most familiar with and have been
            working with. While I am always in pursuit of knowledge and seek to
            learn as much as possible, my current commitments have limited me to
            working with these frameworks and libraries, with a primary focus on
            JavaScript Programming Language. I plan to enhance my knowledge of
            programming by being proficient in as many languages as I am able
            to. If you wish you look at my full resume,
            <a className="text-blue-400" href="/">
              {" "}
              click here
            </a>
            .
          </h1>
        </div>
        <div className="max-w-[1440px] mx-auto text-center large:text-start medium:px-10">
          <h1 className="text-2xl medium:text-3xl uppercase font-thin mb-10 py-4 border-b ">
            My Services
          </h1>
          <div className="font-thin mb-6 ">
            <div className="grid grid-cols-12 gap-6 mb-16">
              <p className=" col-span-12 text-3xl  w-full text-center">
                Web Development
              </p>
              <div className="col-span-12 text-center">
                <p className=" text-sm text-extralight tracking-wide leading-6">
                  Now is a time of internet and having a website justifies your
                  legitimacy as a business. Having an online identity opens up a
                  huge assortment of opportunities for you to explore in terms
                  of getting customers as well as market acquisition. With the
                  help of a website and the plethora of markketing tools you
                  will find over the internet, it has become extremely easy to
                  target the audience you want for your business.
                </p>
              </div>
              <div className="col-span-12 large:col-span-6  text-center large:text-end  flex items-end ">
                <p className=" text-sm larger:text-lg text-extralight tracking-wide leading-6 large:first-letter:ml-16">
                  According to the Forbes Magazine,
                  <strong className="ml-4 italic font-thin text-base larger:text-2xl tracking-widest text-zinc-400">
                    "Having a website is an opportunity to make a great first
                    impression and give people comfort that you're a real
                    business. Showcasing your brand to your prospective
                    customers is one of the most important things that you can
                    do."
                  </strong>
                </p>
              </div>

              <div className=" col-span-12 large:col-span-6 flex justify-center items-end ">
                <img
                  src={Website}
                  className=" object-contain h-56"
                  alt="Website Mockup"
                />
              </div>
              <div className="col-span-12 text-center">
                <p className="text-sm text-extralight tracking-wide leading-6">
                  I offer web development services to help businesses and
                  individuals to build an online identity for themselves. If you
                  are in need of website so that you can build your online
                  identity and give your business a push and if you feel like
                  you can benefit from having a boost to your growth then let me
                  help you prepare for the journey. Just answer a few questions
                  about you and your business requirements and I will get back
                  to you shortly.
                  <br />
                </p>
                <button className="mt-6 h-14 px-6 border border-teal-500">
                  Get Started
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mb-16">
              <p className=" col-span-12 text-3xl w-full text-center">
                Mobile Development
              </p>

              <div className="col-span-12 large:col-span-6 larger:col-span-5 larger:col-start-2   text-center large:text-end  flex items-center ">
                <p className=" text-sm larger:text-base text-extralight tracking-wide leading-6 large:first-letter:ml-16">
                  A mobile application , most commonly referred to as an app, is
                  a software that is designed to operate within a mobile device.
                  A huge benefit of having a mobile application is that it lets
                  you build a direct marketing channel between you and your
                  customers. An app can be anything you want but one of the most
                  common usage of a mobile application is micromanaging and
                  remotely monitoring your business.
                </p>
              </div>

              <div className=" col-span-12 large:col-span-4 flex justify-center items-end ">
                <img
                  src={Iphone}
                  className=" object-contain h-72 larger:h-56"
                  alt=""
                />
              </div>
              <div className="col-span-12 text-center">
                <p className="text-sm text-extralight tracking-wide leading-6">
                  If you are interested in getting a personalized app built for
                  your business, and start automating your business operation,
                  feel free to contact me. Just answer a few questions about you
                  and your business requirements and I will get back to you
                  shortly.
                  <br />
                </p>
                <button className="mt-6 h-14 px-6 border border-orange-500">
                  Get Started
                </button>
              </div>
             
            <p className="col-span-12 text-sm font-thin text-center">To learn more about the services I have to offer  <a className="text-blue-400" href="/">
              {" "}
              click here
            </a></p>
            </div>
          </div>
          <p className="font-thin text-xs italic text-zinc-400">
            This website is built with ReactJs, Nodejs and TailwindCSS, the code
            for which can be found at this
            <a
              className="text-blue-400 text-base"
              href="https://github.com/nischaltimalsina/nischaltimalsina.github.io "
            >
              {" "}
              Github Repository
            </a>
            <br />
            <br />
            Note: This website is still Under Construction. I apologize if you
            couldn't find what you are looking for at the moment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Homepage;

export const SocialIcons = () => {
  return (
    <div className="flex flex-wrap justify-center large:justify-start gap-3">
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
