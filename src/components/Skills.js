import React from "react";
import languages from "../content/img/skills.png";

const Skills = () => {
   return (
      <div className="flex flex-col mx-auto w-full h-[700px] mt-24 bg-white justify-center align-center">
         <div className="">
            <div className="flex justify-center w-auto">
               <h1 className=" text-3xl md:text-3xl lg:text-4xl font-bold text-[#13B582]">
                  Skills
               </h1>
            </div>

            <div className="flex flex-col w-full h-full items-center md:flex-row lg:px-16 mx-auto">
               <div className="flex justify-center items-center w-full h-[300px] md:h-full lg:h-[400px] mb-5">
                  <img
                     src={languages}
                     alt=""
                     className="w-[320px] h-[120px] md:w-[400px] md:h-[150px] lg:w-[550px] lg:h-[200px]"
                  />
               </div>
               <div className="w-full h-auto">
                  <p className="mb-5 text-base text-[#05083F] lg:text-lg px-12 md:px-16 lg:px-24">
                     Through the course of 2021-2022 I started to learn a few
                     languages and use them in some small projects.
                  </p>

                  <p className="text-base text-[#05083F] lg:text-lg px-12 md:px-16 lg:px-24">
                     I instantly fell in love with React and Tailwind CSS, I
                     think these two are such a powerfull and fun combination
                     that opens a lot of paths to create possibly anything that
                     comes to mind.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
