import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const OurMenu = () => {
    const navigate = useNavigate();

    return (
        <>
        <section className="relative bg-[#0b1315] text-white py-32 px-6">
          
            {/* Section Heading */}
            <div className="text-center mb-16">
                <p className="text-[#c9ab81] text-sm tracking-wide mb-2 font2">Laurent’s tasty offer</p>
                <div className='flex justify-center items-center gap-8'>
                    <div className="decor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-semibold tracking-widest text-[#C9AB81]">OUR MENU</h2>
                    <div className="decor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                            <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10">

                {/* Card 1: Starters */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                    <div className="relative group w-[300px] h-[400px] overflow-hidden mb-6">
                        <img
                            src="/assets/image/food.jpg"
                            alt="Starters"
                            className="w-full h-full object-cover"
                        />
                        <div
                            onClick={() => navigate('/starters')}
                            className="absolute w-[85%] h-[85%] mx-auto my-auto inset-0 bg-[#0b1315]/90 opacity-0 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-center items-center"
                        >
                            <div className="text-[#c9ab81] text-4xl select-none transition-transform duration-300 group-hover:scale-110">+</div>
                        </div>
                    </div>
                    <h3 className="uppercase tracking-widest text-sm text-[#C9AB81] mb-1">Starters</h3>
                    <p className="text-sm text-[#9B9B9B]">Specialties</p>
                </div>

                {/* Card 2: Main Courses */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                    <div className="relative group w-[300px] h-[400px] overflow-hidden mb-6">
                        <img
                            src="/assets/image/food2.jpg"
                            alt="Main Courses"
                            className="w-full h-full object-cover"
                        />
                        <div
                            onClick={() => navigate('/main-courses')}
                            className="absolute w-[85%] h-[85%] mx-auto my-auto  inset-0 bg-[#0b1315]/90 opacity-0 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-center items-center"
                        >
                            <div className="text-[#c9ab81] text-4xl select-none transition-transform duration-300 group-hover:scale-110">+</div>
                        </div>
                    </div>
                    <h3 className="uppercase tracking-widest text-sm text-[#C9AB81] mb-1">Main Courses</h3>
                    <p className="text-sm text-[#9B9B9B]">Specialties</p>
                </div>

                {/* Card 3: Desserts */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                    <div className="relative group w-[300px] h-[400px] overflow-hidden mb-6">
                        <img
                            src="/assets/image/food.jpg"
                            alt="Desserts"
                            className="w-full h-full object-cover"
                        />
                        <div
                            onClick={() => navigate('/desserts')}
                            className="absolute w-[85%] h-[85%] mx-auto my-auto  inset-0 bg-[#0b1315]/90 opacity-0 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-center items-center"
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
