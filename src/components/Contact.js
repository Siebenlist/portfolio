import React from "react";
import FadeIn from "react-fade-in";
import TrackVisibility from "react-on-screen";
import { useFormik } from "formik";
import { Schema } from "../schemas/index.js";

//Resets form to blank
const onSubmit = (actions) => {
   actions.resetForm();
};

//Handles errors when fields are empty
const Contact = () => {
   const {
      values,
      errors,
      touched,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
   } = useFormik({
      initialValues: {
         name: "",
         email: "",
         subject: "",
         message: "",
      },
      validationSchema: Schema,
      onSubmit,
   });

   return (
      <div
         id="contact"
         className="flex flex-col justify-center align-center text-center w-full h-[850px] "
      >
         <div className="flex flex-col justify-center align-center bg-white shadow-2xl rounded-[30px] w-[450px] lg:w-[1000px] h-[650px] lg:h-[500px] mx-auto">
            <TrackVisibility>
               {({ isVisible }) => (
                  <FadeIn visible={isVisible ? true : false}>
                     <h1 className="text-3xl lg:text-5xl font-bold text-[#05083F] mb-10 lg:mb-">
                        Get In Touch
                     </h1>
                  </FadeIn>
               )}
            </TrackVisibility>
            <form
               onSubmit={handleSubmit}
               className="relative flex flex-col h-[450px] lg:h-[250px] lg:flex-row lg:flex-wrap justify-center items-center align-center space-y-5 lg:space-y-0"
            >
               <TrackVisibility>
                  {({ isVisible }) => (
                     <FadeIn visible={isVisible ? true : false}>
                        <div className="flex flex-col lg:flex-row h-auto lg:gap-10">
                           <div>
                              <input
                                 className="w-[350px] p-2 mb-5 lg:mb-0 border-2 border-[#05083F] focus:border-[#13B482] rounded-md outline-none focus:scale-105 ease-in-out duration-300 hover:ring-2"
                                 value={values.name}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 id="name"
                                 type="text"
                                 placeholder="Name"
                              />
                              {errors.name && (
                                 <p className="text-start text-[#FF0000]">
                                    {errors.name}
                                 </p>
                              )}
                           </div>

                           <div>
                              <input
                                 className="w-[350px] p-2 border-2 border-[#05083F] focus:border-[#13B482] rounded-md outline-none focus:scale-105 ease-in-out duration-300 hover:ring-2"
                                 value={values.email}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 id="email"
                                 type="email"
                                 placeholder="Email"
                              />
                              {errors.email && (
                                 <p className="text-start text-[#FF0000]">
                                    {errors.email}
                                 </p>
                              )}
                           </div>
                        </div>
                     </FadeIn>
                  )}
               </TrackVisibility>
               <TrackVisibility>
                  {({ isVisible }) => (
                     <FadeIn visible={isVisible ? true : false}>
                        <div className="flex flex-col lg:flex-row h-auto lg:gap-10">
                           <div>
                              <input
                                 className="w-[350px] h-[45px] p-2 mb-5 lg:mb-12 border-2 border-[#05083F] focus:border-[#13B482] rounded-md outline-none focus:scale-105 ease-in-out duration-300 hover:ring-2"
                                 value={values.subject}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 id="subject"
                                 type="text"
                                 placeholder="Subject (optional)"
                              />
                           </div>
                           <div>
                              <textarea
                                 className="w-[350px] h-[150px] p-2 border-2 border-[#05083F] focus:border-[#13B482] rounded-md outline-none resize-none focus:scale-105 ease-in-out duration-300 hover:ring-2"
                                 value={values.message}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 id="message"
                                 type="text"
                                 placeholder="Message"
                              />
                              {errors.message && touched.message && (
                                 <p className="text-start text-[#FF0000]">
                                    {errors.message}
                                 </p>
                              )}
                           </div>
                        </div>
                     </FadeIn>
                  )}
               </TrackVisibility>
               <input
                  className="absolute top-[465px] lg:top-[305px] right-[50px] lg:right-[100px] cursor-pointer text-white font-bold bg-[#13B582] hover:bg-green-600 py-3 px-10 rounded-full focus:scale-105 ease-in-out duration-200"
                  type="submit"
                  onClick={handleSubmit}
                  value="Submit"
                  disabled={isSubmitting}
               />
            </form>
         </div>
      </div>
   );
};

export default Contact;
