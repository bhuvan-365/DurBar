import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbarc = () => {
    const navRef = useRef();
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Always show navbar at top of page
            if (currentScrollY <= 0) {
                gsap.to(navRef.current, {
                    y: '0%',
                    duration: 0.3,
                    ease: 'power2.out'
                });
                return;
            }

            // Scrolling down
            if (currentScrollY > lastScrollY.current) {
                // Only hide if scrolled more than navbar height (about 80px)
                if (currentScrollY > 80) {
                    gsap.to(navRef.current, {
                        y: '-100%',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            } 
            // Scrolling up
            else {
                gsap.to(navRef.current, {
                    y: '0%',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={navRef}
            className="fixed top-0 w-full flex justify-between items-center p-6 border-b-[1px] border-[#c9ab81] z-50 bg-black/5 backdrop-blur-xs"
        >
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

                    <Link to="/" className='relative group'>
                        <span className='inline-block after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-[#c9ab81] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left'>
                            HOME
                        </span>
                    </Link>

                    <li className='relative group cursor-pointer'>
                        <span className='inline-block after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-[#c9ab81] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left'>
                            PAGES
                        </span>
                        <div className="absolute top-full left-0 mt-3 w-40 bg-black text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-out z-50">
                            <ul className='flex flex-col py-2'>
                                <Link to="/ourmenu" className="px-4 py-2 hover:bg-[#171717] transition">Our Menu</Link>
                                <Link to="/aboutus" className="px-4 py-2 hover:bg-[#171717] transition">About Us</Link>
                                <Link to="/gallery" className="px-4 py-2 hover:bg-[#171717] transition">Gallery</Link>
                                <Link to="/contact" className="px-4 py-2 hover:bg-[#171717] transition">Contact</Link>
                            </ul>
                        </div>
                    </li>

                    <li className='relative group cursor-pointer'>
                        <span className='inline-block after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-[#c9ab81] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left'>
                            BLOGS
                        </span>
                        <div className="absolute top-full left-0 mt-3 w-40 bg-black text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-out z-50">
                            <ul className='flex flex-col py-2'>
                                <Link to="/latestpost" className="px-4 py-2 hover:bg-[#171717] transition">Latest Posts</Link>
                                <Link to="/categories" className="px-4 py-2 hover:bg-[#171717] transition">Categories</Link>
                                <Link to="/archives" className="px-4 py-2 hover:bg-[#171717] transition">Archives</Link>
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