import React from "react";
import FadeIn from "react-fade-in";
import scroll from "../content/img/scroll.png";

const Scroll = () => {
   return (
      <FadeIn
         delay={200}
         className="flex flex-col justify-center align-center w-full h-[30px]"
      >
         <div className="animate-bounce w-full">
            <img src={scroll} alt="" className="w-10 h-10 mx-auto" />
         </div>
      </FadeIn>
   );
};

export default Scroll;
