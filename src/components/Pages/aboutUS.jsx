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
    <section className='bg-[#0b1315]'>
      {/* Hero Banner */}
      <div className="relative w-full h-[80vh] bg-[url('/src/assets/image/homebanner.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="flex justify-center items-center gap-8 text-[#C9AB81]">
            <div className="decor">
              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
              </svg>
            </div>
            <h2 className="text-6xl font-normal tracking-widest">About Us</h2>
            <div className="decor">
              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-28">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-14">
          {/* SVG Decoration */}
          <div className="hidden lg:block flex-shrink-0">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="303.083px"
              height="305.563px"
              viewBox="0 0 303.083 305.563"
              className="w-full max-w-[300px]"
            >
              <path
                fill="none"
                stroke="#9A7D57"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                d="M36.927,251.827L1.428,190.62L72.426,67.954 L53.591,35.415 M36.927,251.827l35.499-61.207L12.86,87.705 M107.925,6.621l35.499,61.333L72.426,190.62l65.733,113.572 M85.728,290.305l57.696-99.685L72.426,67.954l35.47-61.282 M176.85,3.041l37.572,64.913L143.424,190.62l60.398,104.352 M148.419,304.655l66.003-114.035L143.424,67.954L180.614,3.7 M281.166,75.306L214.422,190.62l41.37,71.478 M233.9,279.635 l51.521-89.015L214.422,67.954l23.047-39.817 M302.023,161.937L285.42,190.62l7.581,13.098 M96.143,10.63v16.348 M60.644,88.311 V70.871L44.853,43.219 M25.145,149.644v-17.439L7.325,101 M60.644,210.977v-17.439l-23.712-41.521L13.21,193.594v17.383 M96.143,272.31V254.87l-23.712-41.521l-23.722,41.578v10.798 M123.73,302.348l-15.8-27.666L96.429,294.84 M192.572,298.572 l-13.644-23.891l-16.852,29.537 M167.102,272.31V254.87l-23.712-41.521l-23.722,41.578v17.383 M238.139,272.31V254.87 l-23.712-41.521l-23.722,41.578v17.383 M287.81,217.524l-2.385-4.176l-23.722,41.578v1.114 M131.642,210.977v-17.439l-23.712-41.521 l-23.722,41.578v17.383 M202.64,210.977v-17.439l-23.712-41.521l-23.722,41.578v17.383 M273.638,210.977v-17.439l-23.712-41.521 l-23.722,41.578v17.383 M96.143,149.644v-17.439L72.431,90.683l-23.722,41.578v17.383 M167.102,149.644v-17.439L143.39,90.683 l-23.722,41.578v17.383 M238.139,149.644v-17.439l-23.712-41.521l-23.722,41.578v17.383 M295.99,109.182l-10.564-18.499 l-23.722,41.578v17.383 M131.642,88.311V70.871L107.93,29.35L84.208,70.928v17.383 M202.64,88.311V70.871L178.928,29.35 l-23.722,41.578v17.383 M273.638,88.311V70.871l-12.967-22.705 M246.644,35.104l-20.439,35.824v17.383 M167.141,26.978V9.538 l-4.791-8.391 M123.446,3.043l-3.738,6.552v17.383 M192.453,6.533l-1.747,3.062v17.383 M84.248,15.75v31.78 M60.605,47.53V29.963 M48.749,108.863V73.93L36.929,53.236L25.106,73.959v34.904 M13.25,170.196v-34.934L2.607,116.629 M48.749,231.529v-34.934 l-11.819-20.693l-11.823,20.723v34.904 M84.248,289.6v-31.671l-11.819-20.693l-11.823,20.723v17.433 M180.675,301.633l-1.75-3.064 l-2.172,3.805 M155.246,292.862v-34.934l-11.819-20.693l-11.823,20.723v34.904 M226.244,284.372v-26.443l-11.819-20.693 l-11.823,20.723v34.904 M119.747,231.529v-34.934l-11.819-20.693l-11.823,20.723v34.904 M190.745,231.529v-34.934l-11.819-20.693 l-11.823,20.723v34.904 M261.743,231.529v-34.934l-11.819-20.693L238.1,196.625v34.904 M84.248,170.196v-34.934l-11.819-20.693 l-11.823,20.723v34.904 M155.207,170.196v-34.934l-11.819-20.693l-11.823,20.723v34.904 M226.244,170.196v-34.934l-11.819-20.693 l-11.823,20.723v34.904 M297.242,170.196v-34.934l-11.819-20.693l-11.823,20.723v34.904 M119.747,108.863V73.93l-11.819-20.693 L96.104,73.959v34.904 M190.745,108.863V73.93l-11.819-20.693l-11.823,20.723v34.904 M261.743,108.863V73.93l-11.819-20.693 L238.1,73.959v34.904 M155.246,47.53V12.597L148.445,0.69 M138.147,1.156l-6.544,11.47V47.53 M226.244,20.976V47.53 M203.878,10.387 l-1.277,2.239V47.53 M72.426,22.118v45.836 M36.927,73.112v56.051 M1.428,134.444v56.051 M36.927,195.776v56.051 M72.426,257.104 v26.128 M143.424,257.104v47.4 M214.422,257.104v33.414 M107.925,195.776v56.051 M178.923,195.776v56.051 M249.921,195.776v56.051 M72.426,134.444v56.051 M143.424,134.444v56.051 M214.422,134.444v56.051 M285.42,134.444v56.051 M107.925,73.112v56.051 M178.923,73.112v56.051 M249.921,73.112v56.051 M143.424,11.903v56.051 M214.422,14.818v53.136 M137.838,304.162"
              />
            </svg>
          </div>

          {/* Main Content */}
          <div className='flex flex-col items-center gap-8 max-w-2xl'>
            <p className='font2 text-[#C9AB81] text-center uppercase tracking-wider'>Restaurant life</p>

            <div className="flex justify-center items-center gap-8 text-[#C9AB81]">
              <div className="decor">
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
                </svg>
              </div>
              <h2 className="text-6xl font-normal tracking-widest">About Us</h2>
              <div className="decor">
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
                </svg>
              </div>
            </div>

            <p className='text-center text-white leading-relaxed w-[25vw]'>
              Lorem ipsum dolor sit amet, consecte turn se adipisicing elit, sed do eiusmod tempor ens incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci reprehenderit in voluptate velit esse cillu sint occaecat error sit volu. <br /><br />

              Cupidatat non proident, sunt in culpa qui cia deserunt mollit anim id est laborum. Sed utsa tat monullamco laboris nisi ut aliquip exe ne com odoconsequat. Duis aute irure dolor in per spiciamt vsun. <br /><br />

              aperiam, eaque ipsa quae ab illo inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nem odit aut fugit, sed quia consequ un turmagnido lors.
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
              className='w-[200px] h-[300px] object-cover'
              src="/src/assets/image/food2.jpg"
              alt="Our restaurant"
            />
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="relative">
        <div className='relative w-full h-72 my-20'>
          <img 
            className='w-full h-full object-center object-cover' 
            src="/src/assets/image/food.jpg" 
            alt="Restaurant video preview" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="group relative w-24 h-24 hover:scale-110 transition-transform duration-300">
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
                <circle 
                  fill="none" 
                  stroke="none" 
                  strokeMiterlimit="10" 
                  cx="48.558" 
                  cy="48.548" 
                  r="41.037"
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
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center relative">
              <div className="text-4xl text-[#c5a86b] mb-6">”</div>

              <div ref={quoteRef} className="text-center max-w-lg">
                <p className="text-2xl italic leading-relaxed text-[#b7b7b78d] font22">{text}</p>
                <h3 className="mt-6 tracking-widest text-[#f3c97c] text-xl font-bold font1">{author}</h3>
                <p className="text-sm text-gray-400">{role}</p>
              </div>

              {/* Numbered Navigation */}
              <div className="absolute bottom-[-50px] flex space-x-6 font1">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => slideInText(i)}
                    className={`text-xs font-semibold px-2 transition-all duration-300 border-b-2 ${
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