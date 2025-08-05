import React, { useEffect, useState } from 'react';

const OurMenu = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pages = [
    { image: "/src/assets/image/food.jpg", alt: "Appetizer", title: "APPETIZER" },
    { image: "/src/assets/image/food.jpg", alt: "Tandoori", title: "TANDOORI" },
    { image: "/src/assets/image/food.jpg", alt: "Breads", title: "BREADS" },
    { image: "/src/assets/image/food.jpg", alt: "Indian Specialties Veg", title: "Indian Specialties Veg" },
    { image: "/src/assets/image/food.jpg", alt: "Vegan Items", title: "Vegan Items" },
    { image: "/src/assets/image/food.jpg", alt: "Indian Specialties Chicken", title: "Indian Specialties Chicken" },
    { image: "/src/assets/image/food.jpg", alt: "Indian Specialties Non-Veg", title: "Indian Specialties (Non-Veg)" },
    { image: "/src/assets/image/food.jpg", alt: "Special Rice", title: "Special Rice" },
    { image: "/src/assets/image/food.jpg", alt: "Nepali Thali", title: "Nepali Specialities – Nepali Thali" },
    { image: "/src/assets/image/food.jpg", alt: "Sea Food Special", title: "Sea Food Special" },
    { image: "/src/assets/image/food.jpg", alt: "Nepali Authentic Food", title: "Nepali Authentic Food" },
    { image: "/src/assets/image/food.jpg", alt: "Dessert", title: "Dessert" },
    { image: "/src/assets/image/food.jpg", alt: "Chutney", title: "Chutney" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Image Parallax */}
      <div
        className="absolute top-0 left-0 w-full h-[100vh] bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/src/assets/image/homebanner.jpg')`,
          transform: `translateY(${offsetY * 0.4}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Foreground Section */}
      <div className="relative z-10 flex items-center justify-center h-[80vh]">
        <div className="flex justify-center items-center gap-8 text-[#C9AB81]">
          <div className="decor">
            <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
              <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
              <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
            </svg>
          </div>
          <h2 className="text-6xl font-normal tracking-widest ">OUR MENU</h2>
          <div className="decor">
            <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
              <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
              <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
            </svg>
          </div>
        </div>
      </div>

      {/* Menu Grid Section */}
      <section className="relative z-10 bg-black py-10 px-6 pt-[160px]">
        <div className="flex flex-col items-center gap-2 text-white mb-10">
          <img className="h-[250px] w-[280px]" src="/src/assets/image/nobg-Logo.png" alt="Logo" />
          <div className="text-4xl font-light mt-10 font2">We Serve you</div>
          <div className="text-5xl font-semibold tracking-wider mb-10 font3">MENU</div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pages.map((page, idx) => (
            <div
              key={idx}
              className="text-center text-white h-[300px] bg-[#100f0f] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src={page.image}
                alt={page.alt}
                className="w-full h-56 object-cover object-center mb-4"
              />
              <p className="text-lg font-light">{page.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurMenu;
