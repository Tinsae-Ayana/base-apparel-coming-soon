/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            desaturatedRed: "hsl(0, 36%, 70%)",
            softRed: " hsl(0, 93%, 68%)",
            darkGrayishRed: "hsl(0, 6%, 24%)",
            firstGradientFrom: "hsl(0, 0%, 100%)",
            firstGradientTo: "hsl(0, 100%, 98%)",
            secondGradientFrom: "hsl(0, 80%, 86%)",
            secondGradientTo: "hsl(0, 74%, 74%)",
         },
         fontFamily: {
            josefinSans: ["Jesefin Sans"],
         },
         backgroundImage: {
            desktop: "'/bg-pattern-desktop.svg'",
         },
      },
   },
   plugins: [],
};
