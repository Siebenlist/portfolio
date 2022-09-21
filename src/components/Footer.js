import React from "react";
import { AiFillFilePdf, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
   return (
      <div className="flex flex-col justify-end items-end w-full h-[150px] bg-[#13B482] mt-20 p-10">
         <div className="flex flex-row">
            <AiFillLinkedin size={30} color="white" />
            <AiOutlineGithub size={30} color="white" />
            <AiFillFilePdf size={30} color="white" />
         </div>
         <div>
            <h1>Copyright Sieben - 2022</h1>
         </div>
      </div>
   );
};

export default Footer;
