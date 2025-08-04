import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
    return (
        <>
            {/* Navbar Container */}
            <div className="relative w-full z-50">
                {/* Fixed Top Navbar */}
                <div className="fixed top-0 left-0 w-full flex justify-between items-center p-10 px-16 bg-transparent text-white font-sans z-50">
                    
                    {/* Left - MENU & Social Icons */}
                    <div className='flex justify-center items-center gap-10'>
                        <div className="flex items-center gap-1 cursor-pointer group relative">
                            <span className="text-sm font-semibold">MENU</span>
                            <IoIosArrowDown size={20} className="mt-[2px]" />
                            {/* Dropdown */}
                            <div className="absolute top-8 left-0 hidden group-hover:block bg-black text-white py-2 px-4 rounded shadow-lg">
                                <ul>
                                    <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Menu</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">About</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <a href="#" className="hover:text-yellow-400 text-xl"><FaFacebookF /></a>
                            <a href="#" className="hover:text-yellow-400 text-xl"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Center - Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <img src="/src/assets/image/hlogo.webp" alt="Logo" className="h-[100px] w-[100px] mt-10 rounded-full" />
                    </div>

                    {/* Right - Reservation & Phone */}
                    <div className="flex items-center gap-10">
                        <button className="uppercase font-semibold text-sm hover:text-yellow-400">
                            Reservation
                        </button>
                        <a href="#" className="hover:text-yellow-400 text-3xl"><FaPhoneAlt /></a>
                    </div>
                </div>

                {/* Bottom Line (under navbar, behind logo) */}
                {/* <div className="fixed top-[90px] left-0 w-full h-[1px] bg-[#f0bd69] z-40 "></div> */}
            </div>
        </>
    );
};

export default Navbar;
