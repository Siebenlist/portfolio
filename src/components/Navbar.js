import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import {
   AiOutlineClose,
   AiOutlineMenu,
   AiFillFilePdf,
   AiOutlineGithub,
   AiFillLinkedin,
} from "react-icons/ai";

const Navbar = () => {
   const [nav, setNav] = useState(true);

   const handleNav = (e) => {
      setNav(!nav);
   };

   return (
      <div className=" flex justify-end items-center h-32 max-w-[1240px] mx-auto">
         <div className="hidden md:flex items-baseline px-5">
            <a
               className="p-5"
               href="https://www.github.com/Siebenlist"
               rel="noreferrer"
               target="_blank"
            >
               <AiOutlineGithub
                  size={24}
                  className="hover:animate-pulse lg:w-[26px] lg:h-[26px]"
               />
            </a>

            <a
               className="p-5"
               href="https://www.linkedin.com/in/siebenlist/"
               rel="noreferrer"
               target="_blank"
            >
               <AiFillLinkedin
                  size={24}
                  className="hover:animate-pulse lg:w-[26px] lg:h-[26px]"
               />
            </a>
            <a
               className="p-5"
               href="https://www.google.com"
               rel="noreferrer"
               target="_blank"
            >
               <AiFillFilePdf
                  size={24}
                  className="hover:animate-pulse lg:w-[26px] lg:h-[26px]"
               />
            </a>
         </div>

         <ul className="hidden md:flex uppercase font-medium">
            <li className="p-5 font-medium inline">
               <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  href
               >
                  <span class="link link-underline link-underline-black text-black md:text-sm lg:text-base">
                     Skills
                  </span>
               </Link>
            </li>
            <li className="p-5 font-medium inline">
               <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
               >
                  <span class="link link-underline link-underline-black text-black md:text-sm lg:text-base">
                     Projects
                  </span>
               </Link>
            </li>
            <li className="p-5 font-medium inline">
               <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
               >
                  <span class="link link-underline link-underline-black text-black md:text-sm lg:text-base">
                     Contact
                  </span>
               </Link>
            </li>
         </ul>
         <div onClick={handleNav} className="block px-7 md:hidden">
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
         </div>

         <div
            className={
               !nav
                  ? "fixed md:hidden left-0 top-0 w-[50%] h-full border-r border-r-black bg-white ease-in-out duration-500"
                  : "fixed left-[-100%]"
            }
         >
            <ul className="pt-24 p-4 uppercase">
               <li className="p-5 border-b border-b-black">
                  <Link
                     to="projects"
                     spy={true}
                     smooth={true}
                     offset={50}
                     duration={500}
                  >
                     Skills
                  </Link>
               </li>
               <li className="p-5 border-b border-b-black">
                  <Link
                     to="projects"
                     spy={true}
                     smooth={true}
                     offset={50}
                     duration={500}
                  >
                     Projects
                  </Link>
               </li>
               <li className="p-5 border-b border-b-black">
                  <Link
                     to="projects"
                     spy={true}
                     smooth={true}
                     offset={50}
                     duration={500}
                  >
                     Contact
                  </Link>
               </li>
            </ul>

            <div className="flex justify-center">
               <a
                  className="p-5"
                  href="https://github.com/Siebenlist"
                  rel="noreferrer"
                  target="_blank"
               >
                  <AiOutlineGithub size={24} />
               </a>
               <a
                  className="p-5"
                  href="https://www.linkedin.com/in/siebenlist/"
                  rel="noreferrer"
                  target="_blank"
               >
                  <AiFillLinkedin size={24} />
               </a>
               <a
                  className="p-5"
                  href="https://www.google.com"
                  rel="noreferrer"
                  target="_blank"
               >
                  <AiFillFilePdf size={24} />
               </a>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
