import React from 'react';

const Navbarc = () => {
    return (
        <div className="absolute top-0 w-full flex justify-between items-center p-6 border-b-[1px] border-[#c9ab81] z-50">
            {/* Logo */}
            <div className="logo">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34.875px" height="46.938px" viewBox="0 0 34.875 46.938" enableBackground="new 0 0 34.875 46.938" xmlSpace="preserve">
                    <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="0.5,0.003 0.5,36.438 22.875,36.438 " />
                    <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="6.5,5.003 6.5,41.438 28.875,41.438 " />
                    <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="12.5,10.003 12.5,46.438 34.875,46.438 " />
                </svg>
            </div>

            {/* Menu Items */}
            <div className="items">
                <ul className='flex justify-center items-center gap-14 font1 text-white'>

                    {/* HOME */}
                    <li className='relative group'>
                        <span className='inline-block after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-[#c9ab81] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left'>
                            HOME
                        </span>
                    </li>

                    {/* PAGES with Dropdown */}
                    <li className='relative group cursor-pointer'>
                        <span className='inline-block after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-[#c9ab81] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left'>
                            PAGES
                        </span>

                        <div className="absolute top-full left-0 mt-3 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-out z-50">
                            <ul className='flex flex-col py-2'>
                                <li className="px-4 py-2 hover:bg-gray-100 transition">About Us</li>
                                <li className="px-4 py-2 hover:bg-gray-100 transition">Contact</li>
                                <li className="px-4 py-2 hover:bg-gray-100 transition">Services</li>
                            </ul>
                        </div>
                    </li>

                    {/* BLOGS with Dropdown */}
                    <li className='relative group cursor-pointer'>
                        <span className='inline-block after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-[#c9ab81] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left'>
                            BLOGS
                        </span>

                        <div className="absolute top-full left-0 mt-3 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-out z-50">
                            <ul className='flex flex-col py-2'>
                                <li className="px-4 py-2 hover:bg-gray-100 transition">Latest Posts</li>
                                <li className="px-4 py-2 hover:bg-gray-100 transition">Categories</li>
                                <li className="px-4 py-2 hover:bg-gray-100 transition">Archives</li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>

            {/* Hamburger */}
            <div className="ham">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34.875px" height="46.938px" viewBox="0 0 34.875 46.938" enableBackground="new 0 0 34.875 46.938" xmlSpace="preserve">
                    <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="0.5,0.003 0.5,36.438 22.875,36.438 " />
                    <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="6.5,5.003 6.5,41.438 28.875,41.438 " />
                    <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="12.5,10.003 12.5,46.438 34.875,46.438 " />
                </svg>
            </div>
        </div>
    );
};

export default Navbarc;
