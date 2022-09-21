import React from "react";
import scroll from "../content/img/scroll.png";

const Scroll = () => {
   return (
      <div className="flex flex-col justify-center align-center w-full h-[30px]">
         <div className="animate-bounce w-full">
            <img src={scroll} alt="" className="w-10 h-10 mx-auto" />
         </div>
      </div>
   );
};

export default Scroll;
