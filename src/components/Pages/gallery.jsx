import React from 'react'
import { useNavigate } from 'react-router-dom';


const gallery = () => {
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
    <>
      <section className=' bg-[#0b1315] pt-36'>

        <div className="flex justify-center items-center gap-8 text-[#C9AB81] py-28  ">
          <div className="decor">
            <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
              <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
              <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
            </svg>
          </div>
          <h2 className="text-5xl font-normal tracking-widest">Gallery </h2>
          <div className="decor">
            <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
              <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
              <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
            </svg>
          </div>
        </div>


        <section className="py-20 px-6 ">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
              {menuItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center cursor-pointer">
                  <div className="relative group w-[300px] h-[400px] overflow-hidden mb-5">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    <div
                      onClick={() => navigate(item.path)}
                      className="absolute w-[85%] h-[85%] mx-auto my-auto inset-0 bg-[#0b1315]/90 opacity-0 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-center items-center"
                    >
                      <div className="text-[#c9ab81] text-4xl select-none transition-transform duration-300 group-hover:scale-110">
                        +
                      </div>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>



      </section>

    </>
  )
}

export default gallery