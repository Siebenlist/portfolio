import FadeIn from "react-fade-in";
import TrackVisibility from "react-on-screen";
import avatar from "../content/img/avatar.png";
import pdf from "../content/cv.pdf";

const Header = () => {
   return (
      <TrackVisibility>
         {({ isVisible }) => (
            <FadeIn visible={isVisible ? true : false}>
               <div className="flex items-center justify-center gap-52 sm:w-[700px] md:w-full h-[700px]">
                  <div className="w-[350px] md:w-[19rem] lg:w-[30rem] lg:max-w-lg">
                     <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-[#05083F]">
                        Hi I'm Nicolás
                     </h1>
                     <h1 className="text-3xl md:text-4xl md:w-[25rem] lg:text-5xl lg:w-[35rem] text-[#05083F] font-bold pb-2">
                        Front End Developer.
                     </h1>
                     <h2 className="text-lg lg:text-xl md:text-base font-bold text-[#13B582] pb-2">
                        Welcome to my Portfolio
                     </h2>
                     <p className="text-[#05083F]">
                        I’m a self-taught developer mainly working with React
                        and Tailwind CSS.
                     </p>
                     <p className="pb-2 text-[#05083F]">
                        Love teamwork and problem solving.
                     </p>
                     <div>
                        <button className="bg-[#13B582] hover:bg-green-600 py-3 px-2 rounded-full pb-2">
                           <a
                              className="py-4 px-10 rounded-full text-white font-bold"
                              href={pdf}
                           >
                              More info
                           </a>
                        </button>
                     </div>
                  </div>
                  <div className="hidden md:block lg:w-[20rem] md:w-[15rem]">
                     <img
                        src={avatar}
                        alt="avatar"
                        className="lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] items-baseline"
                     />
                  </div>
               </div>
            </FadeIn>
         )}
      </TrackVisibility>
   );
};

export default Header;
