import React, { useState, useEffect } from 'react';
import AboutC from '../Aboutpage/aboutc';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

  // Auto-slide every 5 seconds
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
        className="relative w-full h-[100vh] flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${slides[current].bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>



        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="parent flex justify-center items-center flex-col z-10 text-center px-4"
          >
            <p className="font2 text-white">{slides[current].subtitle}</p>
            <h1 className="uppercase hero-text text-white">{slides[current].title}</h1>
            <p className="text-white max-w-2xl">{slides[current].desc}</p>
            <button className="uppercase p-3 px-7 text-xs border border-[#C9AB81] text-white mt-9">
              view more
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="absolute left-5 top-1/2 z-10 text-white text-xl cursor-pointer" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25.109px" height="34.906px" viewBox="0 0 25.109 34.906" enable-background="new 0 0 25.109 34.906" xml:space="preserve">                    <polyline fill="none" stroke="currentColor" stroke-miterlimit="10" points="24.67,34.59 11.653,17.464 24.67,0.338 "></polyline>                    <polyline fill="none" class="eltdf-popout" stroke="currentColor" stroke-miterlimit="10" points="13.688,34.59 0.671,17.464 13.688,0.338 "></polyline></svg>
        </div>
        <div className="absolute right-5 top-1/2 z-10 text-white text-xl cursor-pointer rotate-180" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25.109px" height="34.906px" viewBox="0 0 25.109 34.906" enable-background="new 0 0 25.109 34.906" xml:space="preserve">                    <polyline fill="none" stroke="currentColor" stroke-miterlimit="10" points="24.67,34.59 11.653,17.464 24.67,0.338 "></polyline>                    <polyline fill="none" class="eltdf-popout" stroke="currentColor" stroke-miterlimit="10" points="13.688,34.59 0.671,17.464 13.688,0.338 "></polyline></svg>       
         </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 z-10 flex gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full cursor-pointer border border-white ${index === current ? "bg-white" : "bg-transparent"
                }`}
            ></div>
          ))}
        </div>
      </div>

      <AboutC />
    </>
  );
};

export default HomeC;
