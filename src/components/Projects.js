import React from "react";
import { data } from "./projectsData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = () => {
   const slideLeft = () => {
      let slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft - 500;
   };

   const slideRight = () => {
      let slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft + 500;
   };

   return (
      <div className="flex flex-col justify-center items-center text-center w-full h-[850px] ">
         <div className="w-full">
            <h1 className="text-[#13B582] text-3xl lg:text-4xl font-bold mb-5">
               Projects
            </h1>
            <p className="text-base font-bold text-[#05083F] lg:text-lg">
               Have a look through some of my projects!
            </p>
            <div className="relative flex items-center">
               <IoIosArrowBack
                  className="lg:hidden opacity-50 cursor-pointer hover:opacity-100"
                  onClick={slideLeft}
                  size={30}
               />
               <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
               >
                  {data.map((item) => (
                     <div className="inline-block">
                        <a className="w-full h-full" href={item.URL}>
                           <img
                              className="w-[300px] lg:w-[400px] inline-block p-[2rem] cursor-pointer hover:scale-105 ease-in-out duration-300 drop-shadow-xl"
                              src={item.img}
                              alt=""
                           />
                        </a>
                        <p className="text-[#05083F]">{item.desc}</p>
                     </div>
                  ))}
               </div>
               <IoIosArrowForward
                  className="lg:hidden opacity-50 cursor-pointer hover:opacity-100"
                  onClick={slideRight}
                  size={30}
               />
            </div>
         </div>
      </div>
   );
};

export default Projects;
