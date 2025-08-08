import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const testimonials = [
  {
    text: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam orem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, libero!",
    author: "ANDREA CHUNG",
    role: "Cook"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, libero!",
    author: "MARIO ROSSI",
    role: "Chef de Cuisine"
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, libero!",
    author: "ISABEL LEE",
    role: "Pastry Chef"
  }
];

const AboutUs = () => {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef();

  const slideInText = (nextIndex) => {
    const direction = nextIndex > index ? 1 : -1;

    gsap.fromTo(quoteRef.current,
      { x: 100 * direction, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );

    setIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % testimonials.length;
      slideInText(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const { text, author, role } = testimonials[index];

  return (
    <section className='bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)]'>
      {/* Hero Banner */}
      <div className="relative w-full h-[80vh] bg-[url('/assets/image/homebanner.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 text-[#C9AB81] flex-wrap text-center">
            <div className="decor hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal tracking-widest">About Us</h2>
            <div className="decor hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-28">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-14">
          
          {/* SVG Decoration */}
          <div className="hidden lg:block flex-shrink-0">
            {/* [SVG content unchanged – keep it as-is] */}
          </div>

          {/* Main Content */}
          <div className='flex flex-col items-center gap-8 w-full max-w-2xl px-4'>
            <p className='font2 not-italic font-normal text-[19px] leading-[28px] text-[#C9AB81] text-center uppercase tracking-wider'>
              Restaurant life
            </p>

            <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 text-[#C9AB81] flex-wrap text-center">
              <div className="decor hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal tracking-widest">About Us</h2>
              <div className="decor hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
                </svg>
              </div>
            </div>

            <p className='text-center text-white leading-relaxed w-full max-w-xl'>
              Lorem ipsum dolor sit amet, consecte turn se adipisicing elit...<br /><br />
              Cupidatat non proident...<br /><br />
              aperiam, eaque ipsa quae ab illo...
            </p>

            <div className='flex flex-col items-center'>
              <button className='font1 text-[#C9AB81] font-semibold hover:text-white transition-colors duration-300'>
                READ MORE
              </button>
              <div className="w-full border-t border-b border-[#f3c97c] h-1 my-1"></div>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block flex-shrink-0">
            <img
              className='w-full max-w-[200px] h-auto object-cover'
              src="/assets/image/food2.jpg"
              alt="Our restaurant"
            />
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="relative">
        <div className='relative w-full h-64 sm:h-72 md:h-96 my-20'>
          <img 
            className='w-full h-full object-center object-cover' 
            src="/assets/image/food.jpg" 
            alt="Restaurant video preview" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="group relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 hover:scale-110 transition-transform duration-300">
              <svg 
                className="w-full h-full text-white"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 97.094 97.094"
              >
                <circle 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeMiterlimit="10" 
                  cx="48.558" 
                  cy="48.548" 
                  r="48"
                  className="group-hover:stroke-[#C9AB81] transition-colors duration-300"
                ></circle>
                <polygon 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeMiterlimit="10" 
                  points="42.578,69.964 42.578,27.13 63.994,48.546"
                  className="group-hover:stroke-[#C9AB81] transition-colors duration-300"
                ></polygon>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="pb-28">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl flex flex-col items-center relative px-4">
              <div className="text-4xl text-[#c5a86b] mb-6">”</div>

              <div ref={quoteRef} className="text-center max-w-lg">
                <p className="text-xl sm:text-2xl italic leading-relaxed text-[#b7b7b78d] font22">{text}</p>
                <h3 className="mt-6 text-[#f3c97c] text-base sm:text-xl font-medium leading-[30px] tracking-[2px] font1">{author}</h3>
                <p className="text-sm text-gray-400">{role}</p>
              </div>

              <div className="absolute -bottom-12 flex space-x-4 sm:space-x-6 font-medium text-sm sm:text-[14px] leading-[30px] tracking-[2px] font1">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => slideInText(i)}
                    className={`px-2 transition-all duration-300 border-b-2 ${
                      index === i
                        ? 'border-[#c5a86b] text-[#c5a86b]'
                        : 'border-transparent text-gray-400 hover:text-[#c5a86b]'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
