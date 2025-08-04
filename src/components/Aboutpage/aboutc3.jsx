import React from 'react';

export default function BestSpecialtiesSection() {
  return (
    <section className="bg-[#0e1b1d] text-white font-serif py-36 px-4 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Pasta Dish"
            className="max-w-[400px] md:max-w-[480px] object-cover shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left max-w-xl flex justify-center items-center flex-col">
          <p className="italic text-[#c5a86b] mb-2 font2">Recommendations</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-widest text-[#f3c97c] mb-6 leading-snug uppercase text-center   font11">
            Our Best <br className='mt-'/> Specialties
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-center w-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam enim et.
          </p>
          <button className="uppercase border border-[#c5a86b] text-white text-xs px-6 py-3 hover:bg-[#c5a86b] hover:text-black transition-all duration-300">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
