import React from "react";
import Me from "../assets/images/Photo.png";
import { SocialIcons } from "./Homepage";
const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-6 medium:px-10  mt-10 ">
      <div className="grid grid-cols-12  large:gap-10 ">
        <div className="col-span-12 large:col-span-5 flex justify-center large:justify-end items-center">
          <img
            src={Me}
            alt="Nischal Timalsina"
            className="h-72 large:h-[28rem] duration-300 contrast-[0.9]"
          />
        </div>
        <div className="col-span-12 large:col-span-7 p-6 font-extralight text-center large:text-start tracking-wide leading-8">
          <p className="text-2xl "> Hello Folks,</p>
          <p className="">My name is </p>
          <h1 className="text-4xl text-blue-400 ">Nischal Timalsina</h1>
          <p className="first-letter:text-5xl first-letter:ml-10">
            a 26 years old Frontend Developer from Nijgadh, Nepal currently
            based in Kathmandu. I love everything that has to do with Web design
            & development, Graphic design, Industrial design and I feel a true
            devotion for modern and minimal user interface.
            <br />I base my work on ReactJs and React Native. I am absolutely
            thrilled be working in this field of design and development.
          </p>

          <p className="font-extralight text-xl my-4 text-teal-500">
            Follow Me on
          </p>
          <SocialIcons />
        </div>
      </div>
      <div className="text-center large:text-start">
        <p className="text-2xl medium:text-3xl  uppercase font-thin mb-10 py-4 border-b ">
          About Me
        </p>
        <p className="font-extralight text-sm large:text-base leading-7 ">
          After dropping out from Bachelors of IT (Networking) from Sydney,
          Australia, I returned home to Nepal where I spent two years
          discovering my true passion. After a lot of thinking and research, I
          started learning JavaScript when I was introduced to NodeJs and
          ReactJs. I spent a year on learning and making myself better at design
          and development. The depper I dived, the more fascinated it got me. I
          acquired programming skills along with the ability to build
          comprehensive and modern user interfaces as well as the skills to
          manage clients, meet deadlines and manage time. <br />
          <br />
          As a freelance web developer and designer I have taken on jobs like
          Web Development, Brand Design and Graphic Design with my clients being
          mainly from my hometown. To seek growth I have now moved to Kathmandu
          and will be continuing my pursuit to help individuals and businesses
          by providing them with praiseworthy web design and branding.
          <br />
          <br />I have worked on a multitude of web and print based projects for
          a range of clients providing Web Design and Development, Branding and
          Graphic Design. During my time studying design and development, I have
          learnt a lot about Design Architecture and have a keen understanding
          of User Experience design, which I primarily focus on with my
          projects.
          <br />
          <br />I am currently working on freelance projects from my Home Office
          in Kathmandu. I am always available to discuss your projects over the
          phone or the internet. Also, I am open to commitments if the work
          offer suits my skill set.
        </p>
      </div>
      <div className="h-96 mt-16 hidden">
      <p className="text-2xl medium:text-3xl uppercase font-thin mb-10 py-4 border-b ">
         SKILLS & EXPERIENCE
        </p>
        <p className="font-extralight text-sm large:text-base leading-7 ">

        </p>
      </div>
    </div>
  );
};

export default About;
