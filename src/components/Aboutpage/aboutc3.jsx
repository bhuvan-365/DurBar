import React from 'react';

export default function BestSpecialtiesSection() {
  return (
    <section className="my-36 w-full h-[100vh] relative bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center  text-white font-serif py-20 sm:py-28 px-4 md:px-24 flex justify-center items-center">

      <div className="absolute inset-0  z-0 flex justify-center items-center-"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(15,23,42,0.85) 50%, rgba(0,0,0,0.85) 100%)'
        }}
      >



      {/* RIGHT CONTENT */}
      <div className="z-50 w-full md:w-1/2 text-center md:text-left flex justify-center items-center flex-col px-4 sm:px-0">
        <p className="text-center mb-2 not-italic font-normal text-[19px] leading-[28px] text-[rgb(201,171,129)] font2">
          Recommendations
        </p>

        <h2 className=" text-[2rem] sm:text-[2.5rem] md:text-5xl mb-6 uppercase font-medium not-italic text-[rgb(201,171,129)] leading-[50px] tracking-[8px] font11 text-center ">
          Our Best <br className="hidden md:block" /> Specialties
        </h2>

        <p className=" text-gray-300 mb-8 leading-relaxed text-center max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam enim et.
        </p>

        <button className="text-center uppercase border border-[#c5a86b] text-white text-xs px-6 py-3 hover:bg-[#c5a86b] hover:text-black transition-all duration-300 font4">
          View All
        </button>
      </div>
    </div>
    </section >
  );
}
