import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const menuItems = [
    { image: '/assets/image/food.jpg', alt: 'Starters', path: '/starters' },
    { image: '/assets/image/food2.jpg', alt: 'Main Courses', path: '/main-courses' },
    { image: '/assets/image/food.jpg', alt: 'Desserts', path: '/desserts' },
    { image: '/assets/image/food.jpg', alt: 'Beverages', path: '/beverages' },
    { image: '/assets/image/food2.jpg', alt: 'Tandoori', path: '/tandoori' },
    { image: '/assets/image/food.jpg', alt: 'Vegan', path: '/vegan' },
    { image: '/assets/image/food2.jpg', alt: 'Special Rice', path: '/special-rice' },
    { image: '/assets/image/food.jpg', alt: 'Chutneys', path: '/chutneys' },
    { image: '/assets/image/food2.jpg', alt: 'Nepali Thali', path: '/nepali-thali' },
  ];

  return (
    <section className='bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] pt-36 pb-10 px-4'>
      {/* Header */}
      <div className="flex flex-wrap justify-center items-center gap-6 text-[#C9AB81] py-14 text-center">
        <div className="decor">
          <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
          </svg>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-widest">Gallery</h2>
        <div className="decor">
          <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
          </svg>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {menuItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center w-full max-w-[320px]">
              <div className="relative group w-full aspect-[3/4] overflow-hidden rounded-md shadow-lg">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  onClick={() => navigate(item.path)}
                  className="absolute inset-0 bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] opacity-0 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-center items-center cursor-pointer"
                >
                  <div className="text-[#c9ab81] text-4xl select-none transition-transform duration-300 group-hover:scale-110">
                    +
                  </div>
                </div>
              </div>
              <p className="text-[#c9ab81] mt-2 text-sm sm:text-base">{item.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
