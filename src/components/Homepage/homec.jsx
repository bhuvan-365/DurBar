import React, { useState, useEffect } from 'react';
import AboutC from '../Aboutpage/aboutc';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    bg: "/assets/image/homebanner.jpg",
    title: "The Finest drinks",
    subtitle: "take a sip of our innovation drink",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dolores, beatae ut maiores sapiente cumque!"
  },
  {
    bg: "/assets/image/food.jpg",
    title: "Refreshing Blends",
    subtitle: "crafted to perfection",
    desc: "Exquisite flavor profiles to delight your senses. Try our latest summer blend now!"
  },
  {
    bg: "/assets/image/food2.jpg",
    title: "Bold and Unique",
    subtitle: "where tradition meets innovation",
    desc: "Discover a range of drinks you’ve never tasted before—because you deserve more than ordinary."
  },
];

const HomeC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div
        className="relative w-full h-screen flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${slides[current].bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-slate-900/60 to-black/80 z-0" />

        {/* Optional Bottom Blend */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-0" />

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="parent flex flex-col items-center justify-center z-10 text-center px-4 max-w-5xl mx-auto"
          >
            <p className="font2 font-normal text-[19px] leading-[28px] text-[rgb(201,171,129)] mb-2 sm:mb-4">
              {slides[current].subtitle}
            </p>

            <h1 className="uppercase hero-text font-thin text-white 
              text-[3rem] sm:text-[5rem] md:text-[7rem] 
              leading-[3.5rem] sm:leading-[6rem] md:leading-[145px] mb-4"
            >
              {slides[current].title}
            </h1>

            <p className="text-white max-w-2xl mb-6 text-base sm:text-lg">
              {slides[current].desc}
            </p>

            <button className="uppercase p-3 px-7 text-xs sm:text-sm border border-[#C9AB81] text-white mt-4 sm:mt-9 hover:bg-[#C9AB81] hover:text-black transition">
              View More
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div
          onClick={prevSlide}
          className="absolute left-3 sm:left-5 top-1/2 z-10 text-white text-2xl sm:text-3xl cursor-pointer select-none -translate-y-1/2"
          role="button" tabIndex={0} aria-label="Previous slide"
          onKeyDown={e => e.key === 'Enter' && prevSlide()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.109"
            height="34.906"
            viewBox="0 0 25.109 34.906"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
          >
            <polyline points="24.67,34.59 11.653,17.464 24.67,0.338" />
            <polyline points="13.688,34.59 0.671,17.464 13.688,0.338" />
          </svg>
        </div>

        <div
          onClick={nextSlide}
          className="absolute right-3 sm:right-5 top-1/2 z-10 text-white text-2xl sm:text-3xl cursor-pointer select-none -translate-y-1/2 rotate-180"
          role="button" tabIndex={0} aria-label="Next slide"
          onKeyDown={e => e.key === 'Enter' && nextSlide()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.109"
            height="34.906"
            viewBox="0 0 25.109 34.906"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
          >
            <polyline points="24.67,34.59 11.653,17.464 24.67,0.338" />
            <polyline points="13.688,34.59 0.671,17.464 13.688,0.338" />
          </svg>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 z-10 flex gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full cursor-pointer border border-white
                ${index === current ? "bg-white" : "bg-transparent"}`}
              role="button" tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
              onKeyDown={e => e.key === 'Enter' && setCurrent(index)}
            />
          ))}
        </div>
      </div>

      {/* Next Section */}
      <AboutC />
    </>
  );
};

export default HomeC;
