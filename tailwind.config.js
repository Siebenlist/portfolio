/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         animation: {
            outin: "outin 1s ease-in-out",
         },
      },
   },
   plugins: [require("tailwind-scrollbar-hide")],
};
