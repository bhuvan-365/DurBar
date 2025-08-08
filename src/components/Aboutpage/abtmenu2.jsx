import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const OurMenu = () => {
    const navigate = useNavigate();

    return (
        <>
        <section className="relative bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] text-white py-32 px-4 sm:px-6 lg:px-12">
          
            {/* Section Heading */}
            <div className="text-center mb-16">
                <p className="text-sm tracking-wide mb-2 not-italic font-normal text-[19px] leading-[28px] text-[rgb(201,171,129)] font2">Laurent’s tasty offer</p>
                <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8'>
                    <div className="decor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
                        </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-widest text-[#C9AB81]">OUR MENU</h2>
                    <div className="decor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">

                {/* Card 1: Starters */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                    <div className="relative group w-[90vw] max-w-[300px] h-[400px] overflow-hidden mb-6">
                        <img
                            src="/assets/image/food.jpg"
                            alt="Starters"
                            className="w-full h-full object-cover"
                        />
                        <div
                            onClick={() => navigate('/ourmenu')}
                            className="absolute w-[85%] h-[85%] mx-auto my-auto inset-0 bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] opacity-0 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-center items-center"
                        >
                            <div className="text-[#c9ab81] text-4xl select-none transition-transform duration-300 group-hover:scale-110">+</div>
                        </div>
                    </div>
                    <h3 className="uppercase tracking-widest text-sm text-[#C9AB81] mb-1">Starters</h3>
                    <p className="text-sm text-[#9B9B9B]">Specialties</p>
                </div>

                {/* Card 2: Main Courses */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                    <div className="relative group w-[90vw] max-w-[300px] h-[400px] overflow-hidden mb-6">
                        <img
                            src="/assets/image/food2.jpg"
                            alt="Main Courses"
                            className="w-full h-full object-cover"
                        />
                        <div
                            onClick={() => navigate('/ourmenu')}
                            className="absolute w-[85%] h-[85%] mx-auto my-auto inset-0 bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] opacity-0 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-center items-center"
                        >
                            <div className="text-[#c9ab81] text-4xl select-none transition-transform duration-300 group-hover:scale-110">+</div>
                        </div>
                    </div>
                    <h3 className="uppercase tracking-widest text-sm text-[#C9AB81] mb-1">Main Courses</h3>
                    <p className="text-sm text-[#9B9B9B]">Specialties</p>
                </div>

                {/* Card 3: Desserts */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                    <div className="relative group w-[90vw] max-w-[300px] h-[400px] overflow-hidden mb-6">
                        <img
                            src="/assets/image/food.jpg"
                            alt="Desserts"
                            className="w-full h-full object-cover"
                        />
                        <div
                            onClick={() => navigate('/ourmenu')}
                            className="absolute w-[85%] h-[85%] mx-auto my-auto inset-0 bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] opacity-0 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-center items-center"
                        >
                            <div className="text-[#c9ab81] text-4xl select-none transition-transform duration-300 group-hover:scale-110">+</div>
                        </div>
                    </div>
                    <h3 className="uppercase tracking-widest text-sm text-[#C9AB81] mb-1">Desserts</h3>
                    <p className="text-sm text-[#9B9B9B]">Specialties</p>
                </div>

            </div>
        </section>
        </>
    );
};

export default OurMenu;
