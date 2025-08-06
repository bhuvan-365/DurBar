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

                    <Link to="/" className='menu-link'><span className='menu-title'>HOME</span></Link>
                    <Link to="/ourmenu" className="menu-link"><span className='menu-title'>OurMenu</span></Link>
                    <Link to="/aboutus" className="menu-link"><span className='menu-title'>About US</span></Link>
                    <Link to="/gallery" className="menu-link"><span className='menu-title'>Gallery</span></Link>
                    <Link to="/contact" className="menu-link"><span className='menu-title'>Contact</span></Link>
                    <Link to="/blogs" className='menu-link'><span className='menu-title'>BLOGS</span></Link>
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