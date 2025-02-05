import React from "react";
import react1 from "../assets/react1.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import javascript from "../assets/javascript.png";
import uiux from "../assets/ux-ui-logo.png";
import redux from "../assets/redux.png";

const Skills = () => {
  return (
    <div className="flex flex-col h-auto w-full max-w-4xl bg-orange-300 mt-4 mx-auto p-4 rounded-lg shadow-lg">
      <div className="bg-red-400 h-20 flex justify-center items-center flex-col">
        <div className="text-white text-3xl mt-20">Skills</div>
        <div className="bg-red-200 text-center p-2">
          As a Junior Web Developer, I am confident in my ability to build
          full-stack web applications. I am proficient in data structures too
          and I am committed to continuous learning and development, with a
          specific focus on becoming a proficient MERN stack developer.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-25">
        
        <div className="flex gap-4 items-center">
          <img className="h-20 w-20 md:h-24 md:w-24 rounded-full" src={react1} alt="React" />
          <div className="text-gray-800 text-sm">
            Progressive React learner with over 1 year of experience in building React web applications. Proficient in JavaScript and RESTful APIs, with a proven record of enhancing skills.
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <img className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white" src={tailwind} alt="Tailwind CSS" />
          <div className="text-gray-800 text-sm">
            As a Junior Web Developer with over six months of experience, I have developed a strong enthusiasm for using Tailwind CSS. This utility-first framework has transformed my approach to designing web applications, making the process both efficient and enjoyable.
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <img className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white" src={express} alt="Express.js" />
          <div className="text-gray-800 text-sm">
            As a Junior Web Developer with six months of dedicated learning experience in mastering the MERN stack, I am proficient in building dynamic and responsive web applications.
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <img className="h-20 w-20 md:h-24 md:w-24 rounded-full" src={javascript} alt="JavaScript" />
          <div className="text-gray-800 text-sm">
            With over 1 year of learning experience in web development, I have gained significant proficiency in writing JSX code for my applications.
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <img className="h-20 w-20 md:h-24 md:w-24 rounded-full" src={uiux} alt="UI/UX Design" />
          <div className="text-gray-800 text-sm">
            With over 1.5 years of learning experience in web page design, I find great satisfaction in applying my skills while observing real-time changes during the development process.
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <img className="h-20 w-20 md:h-24 md:w-24 rounded-full" src={redux} alt="Redux" />
          <div className="text-gray-800 text-sm">
            With six months of learning experience working on projects in React, I have developed proficiency in state management using Redux.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
