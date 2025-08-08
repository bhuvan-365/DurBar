import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const dropdownRef = useRef(null);
    const location = useLocation();
    const [isAtTop, setIsAtTop] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollPosition = useRef(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            const scrollingDown = currentScrollPosition > lastScrollPosition.current;
            lastScrollPosition.current = currentScrollPosition;

            // Check if at top of page
            const atTop = currentScrollPosition === 0;
            setIsAtTop(atTop);

            // Close menu when scrolling
            if (!atTop && isMenuOpen) {
                setIsMenuOpen(false);
            }

            // Handle scroll down (hide)
            if (scrollingDown && currentScrollPosition > 100) {
                setIsVisible(false);
            }
            // Handle scroll up (show)
            else if (!scrollingDown) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    // Check if current path matches the link
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 z-50 w-full flex items-center justify-between px-[15px] md:px-14 transition-transform duration-200 ${
                    isAtTop ? 'bg-transparent' : 'bg-black/10 backdrop-blur-[1px]'
                } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <Link to='/reservation' className="flex-1 menu-link">
                    <div className="font4 !text-white w-max menu-title">Reservation</div>
                </Link>

                <Link to='/' className="flex-1 flex justify-center" ref={logoRef}>
                    <img
                        className='h-full object-contain transition-all duration-200 max-h-[170px]'
                        src="/assets/image/nobg-logo.png"
                        alt="logo"
                        style={{
                            width: isAtTop ? '150px' : '100px',
                            height: isAtTop ? '150px' : '90px'
                        }}
                    />
                </Link>

                <div className="flex-1 flex justify-end">
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                        <div className="call  flex items-center gap-1 text-white">
                            <img className='filter invert' src="/assets/svg/call.svg" alt="call icon" />
                            <span >+977 9812345678</span>
                        </div>
                        </div>
                        <button
                            className="ham focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Menu"
                        >
                            <img
                                className={`filter invert w-[40px] transition-transform duration-200 ${
                                    isMenuOpen ? 'rotate-90' : ''
                                }`}
                                src="/assets/svg/hamburger.svg"
                                alt="hamburger"
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Dropdown Menu */}
            <div
                ref={dropdownRef}
                className={`fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-90 backdrop-blur-md overflow-hidden transition-all duration-300 ${
                    isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
                }`}
                style={{
                    marginTop: navRef.current?.offsetHeight || '80px'
                }}
            >
                <div className="container mx-auto px-14 py-6">
                    <ul className="flex flex-col gap-6 text-white text-xl">
                        <Link 
                            to="/" 
                            className={`menu-link ${isActive('/') ? 'text-[#f3c97c]' : ''}`}
                            onClick={closeMenu}
                        >
                            <span className='menu-title'>Home</span>
                        </Link>
                        <Link 
                            to="/ourmenu" 
                            className={`menu-link ${isActive('/ourmenu') ? 'text-[#f3c97c]' : ''}`}
                            onClick={closeMenu}
                        >
                            <span className='menu-title'>Our Menu</span>
                        </Link>
                        <Link 
                            to="/aboutus" 
                            className={`menu-link ${isActive('/aboutus') ? 'text-[#f3c97c]' : ''}`}
                            onClick={closeMenu}
                        >
                            <span className='menu-title'>About US</span>
                        </Link>
                        <Link 
                            to="/gallery" 
                            className={`menu-link ${isActive('/gallery') ? 'text-[#f3c97c]' : ''}`}
                            onClick={closeMenu}
                        >
                            <span className='menu-title'>Gallery</span>
                        </Link>
                        <Link 
                            to="/contact" 
                            className={`menu-link ${isActive('/contact') ? 'text-[#f3c97c]' : ''}`}
                            onClick={closeMenu}
                        >
                            <span className='menu-title'>Contact Us</span>
                        </Link>
                        <Link 
                            to="/blogs" 
                            className={`menu-link ${isActive('/blogs') ? 'text-[#f3c97c]' : ''}`}
                            onClick={closeMenu}
                        >
                            <span className='menu-title'>Blogs</span>
                        </Link>
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50"
                    onClick={toggleMenu}
                />
            )}

            {/* Add this to your CSS or as Tailwind classes */}

        </>
    );
};

export default Navbar;