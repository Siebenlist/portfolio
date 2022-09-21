import React from "react";
import { useFormik } from "formik";
import { Schema } from "../schemas/index.js";
//solucionar gap en subject input, animaciones focus en el placeholder

const onSubmit = () => {
   console.log("Success");
};

const Contact = () => {
   const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik(
      {
         initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
         },
         validationSchema: Schema,
         onSubmit,
      }
   );

   console.log(errors);

   return (
      <div className="flex flex-col justify-center align-center text-center w-full h-[700px] ">
         <div className="flex flex-col justify-center align-center bg-white shadow-2xl rounded-[30px] w-[450px] lg:w-[1000px] h-[600px] lg:h-[500px] mx-auto">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#05083F] mb-10 lg:mb-">
               Get In Touch
            </h1>
            <form
               onSubmit={handleSubmit}
               className="relative flex flex-col lg:h-[250px] lg:flex-row lg:flex-wrap justify-center items-center space-y-5 lg:space-y-0"
            >
               <div className="h-auto">
                  <input
                     className="w-[350px] p-2 mb-5 lg:mb-0 border-2 border-[#05083F] focus:border-[#13B482] rounded-md outline-none focus:scale-105 ease-in-out duration-300"
                     value={values.name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     id="name"
                     type="text"
                     placeholder="Name"
                  />
                  <input
                     className="w-[350px] p-2 lg:ml-10 lg:mb-0 border-2 border-[#05083F] focus:border-[#13B482] rounded-md outline-none focus:scale-105 ease-in-out duration-300"
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     id="email"
                     type="email"
                     placeholder="Email"
                  />
               </div>
               <div className="flex flex-col lg:flex-row h-auto">
                  <input
                     className="w-[350px] h-[45px] p-2 mb-5 lg:mb-12 border-2 border-[#05083F] focus:border-[#13B482] rounded-md outline-none focus:scale-105 ease-in-out duration-300"
                     value={values.subject}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     id="subject"
                     type="text"
                     placeholder="Subject (optional)"
                  />
                  <textarea
                     className="w-[350px] h-[150px] p-2 lg:ml-10 border-2 border-[#05083F] focus:border-[#13B482] rounded-md outline-none resize-none focus:scale-105 ease-in-out duration-300"
                     value={values.message}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     id="message"
                     type="text"
                     placeholder="Message"
                  />
               </div>
               <input
                  className="absolute top-[390px] lg:top-[305px] right-[50px] lg:right-[100px] cursor-pointer text-white font-bold bg-[#13B582] hover:bg-green-600 py-3 px-10 rounded-full focus:scale-105 ease-in-out duration-200"
                  type="submit"
                  onClick={handleSubmit}
                  value="Submit"
               />
            </form>
         </div>
      </div>
   );
};

export default Contact;
