import React from "react";
import FadeIn from "react-fade-in";
import TrackVisibility from "react-on-screen";

import {
   cssLogo,
   jsLogo,
   reactLogo,
   tailwindLogo,
   bootstrapLogo,
   gitLogo,
   githubLogo,
   mySqlLogo,
} from "../content/img/images";

const Skills = () => {
   return (
      <FadeIn>
         <div className="flex flex-col mx-auto w-full h-[700px] mt-24 bg-white justify-center align-center">
            <div className=" items-center h-[550px]">
               <TrackVisibility>
                  {({ isVisible }) => (
                     <FadeIn
                        visible={isVisible ? true : false}
                        delay={150}
                        className="flex justify-center align-center w-auto"
                     >
                        <h1 className=" text-3xl md:text-3xl lg:text-4xl font-bold text-[#13B582]">
                           Skills
                        </h1>
                     </FadeIn>
                  )}
               </TrackVisibility>

               <div className="flex flex-col w-full h-full justify-center items-center md:flex-row lg:px-16 mx-auto gap-20">
                  <TrackVisibility>
                     {({ isVisible }) => (
                        <FadeIn
                           visible={isVisible ? true : false}
                           delay={550}
                           transitionDuration={200}
                           className="flex justify-center flex-wrap items-center w-[450px] md:w-full lg:h-[300px] lg:w-[550px] gap-10 "
                        >
                           <img
                              src={cssLogo}
                              alt=""
                              className="w-[80px] h-[80px] hover:scale-110 ease-in-out duration-300"
                           />
                           <img
                              src={jsLogo}
                              alt=""
                              className="w-[80px] h-[80px] hover:scale-110 ease-in-out duration-300"
                           />
                           <img
                              src={reactLogo}
                              alt=""
                              className="w-[80px] h-[80px] hover:scale-110 ease-in-out duration-300"
                           />
                           <img
                              src={tailwindLogo}
                              alt=""
                              className="w-[80px] h-[50px] hover:scale-110 ease-in-out duration-300"
                           />
                           <img
                              src={bootstrapLogo}
                              alt=""
                              className="w-[80px] h-[80px] hover:scale-110 ease-in-out duration-300"
                           />
                           <img
                              src={gitLogo}
                              alt=""
                              className="w-[80px] h-[80px] hover:scale-110 ease-in-out duration-300"
                           />
                           <img
                              src={githubLogo}
                              alt=""
                              className="w-[70px] h-[70px] hover:scale-110 ease-in-out duration-300"
                           />
                           <img
                              src={mySqlLogo}
                              alt=""
                              className="w-[70px] h-[70px] hover:scale-110 ease-in-out duration-300"
                           />
                        </FadeIn>
                     )}
                  </TrackVisibility>
                  <TrackVisibility>
                     {({ isVisible }) => (
                        <FadeIn
                           visible={isVisible ? true : false}
                           delay={550}
                           className=" w-full lg:w-[650px] h-auto"
                        >
                           <p className="mb-5 text-base text-[#05083F] lg:text-lg px-12 lg:w-[650px]">
                              Through the course of 2021-2022 I started to learn
                              a few languages and use them in some small
                              projects.
                           </p>

                           <p className="text-base text-[#05083F] lg:text-lg px-12 lg:w-[650px]">
                              I instantly fell in love with React and Tailwind
                              CSS, I think these two are such a powerfull and
                              fun combination that opens a lot of paths to
                              create possibly anything that comes to mind.
                           </p>
                        </FadeIn>
                     )}
                  </TrackVisibility>
               </div>
            </div>
         </div>
      </FadeIn>
   );
};

export default Skills;
