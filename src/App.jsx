import { useState } from "react";

export default function App() {
   const [valid, setValide] = useState(true);

   const onChange = (email) => {
      let pattern =
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setValide(pattern.test(email));
      if (pattern.test(email)) {
         document.getElementById("emailInput").classList.remove("focus:border-red-700");
         document.getElementById("emailInput").classList.add("focus:border-gray-700");
      } else {
         document.getElementById("emailInput").classList.remove("focus:border-gray-700");
         document.getElementById("emailInput").classList.add("focus:border-red-700");
      }
   };

   return (
      <div className='w-screen h-screen flex'>
         <div className='lg:basis-3/5 basis-full lg:px-28 lg:py-20 '>
            <div className='lg:px-0 lg:py-0 py-5 px-2'>
               <img src='logo.svg' alt='logo' className='' />
            </div>
            <img src='hero-mobile.jpg' alt='hero image' className=' lg:hidden w-full h-auto' />
            <div className='font-josefinSans lg:text-6xl text-3xl tracking-widest lg:mt-28 mt-5 lg:text-left text-center'>
               <h1 className='text-desaturatedRed font-light'>WE'RE </h1>
               <h1 className='font-semibold text-darkGrayishRed'>COMING</h1>
               <h1 className='font-semibold text-darkGrayishRed'>SOON</h1>
            </div>
            <div>
               <p className='lg:text-[16px] text-[12px]  lg:text-left text-center font-josefinSans text-desaturatedRed lg:pt-4 pt-2 lg:w-[70%] w-full px-2'>
                  Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcemnts and launch
                  deals.
               </p>
            </div>
            <form>
               <div className='lg:w-[70%] w-[90%] lg:m-0 pt-8 m-auto relative'>
                  <input
                     id='emailInput'
                     type='email'
                     onBlur={() => {
                        if (!valid) {
                           setValide(!valid);
                        }
                     }}
                     onKeyUp={(email) => {
                        onChange(email.target.value);
                     }}
                     className='w-full lg:h-12 h-10 px-6 rounded-3xl border-2 border-gray-300 focus:outline-none  focus:border-gray-700 border-solid placeholder:align-middle placeholder:focus:text-gray-200 placeholder:text-gray-200 font-josefinSans'
                     name='emall'
                     placeholder='email'
                  />
                  <div className={`absolute lg:bottom-3 bottom-2 right-[25%] ${valid ? "hidden" : "block"}`}>
                     <img src='icon-error.svg' alt='' />
                  </div>
                  <div className='lg:h-12 h-10 w-[20%] rounded-3xl absolute bottom-0 right-0 bg-gradient-to-br from-secondGradientFrom to-secondGradientTo   flex justify-center items-center hover:shadow-2xl shodow-softRed hover:bg-none hover:bg-red-200 hover:scale-105 duration-500 cursor-pointer'>
                     <img src='icon-arrow.svg' alt='arrow icon' />
                  </div>
               </div>
               <p
                  className={
                     valid
                        ? `font-josefinSans text-red-500 px-6 font-semibold pt-2 lg:text-[16px] text-[12px] hidden`
                        : "font-josefinSans text-red-500 px-6 font-semibold pt-2 lg:text-[16px] text-[12px]"
                  }
               >
                  Please provide a valid email
               </p>
            </form>
         </div>
         <div className='lg:basis-2/5 lg:block hidden'>
            <img src='hero-desktop.jpg' alt='hero image' className=' w-full h-full' />
         </div>
      </div>
   );
}
