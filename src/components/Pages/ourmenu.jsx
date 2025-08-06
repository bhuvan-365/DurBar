import React, { useEffect, useState, useRef, useCallback } from 'react';

const OurMenu = () => {
  const [offsetY, setOffsetY] = useState(0);
  const menuContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const containerWidthRef = useRef(0);

  const [menuHeadItems] = useState([
    { id: 1, title: "APPETIZER", image: "/src/assets/image/food.jpg" },
    { id: 2, title: "TANDOORI", image: "/src/assets/image/food.jpg" },
    { id: 3, title: "BREADS", image: "/src/assets/image/food.jpg" },
    { id: 4, title: "INDIAN SPECIALTIES VEG", image: "/src/assets/image/food.jpg" },
    { id: 5, title: "VEGAN ITEMS", image: "/src/assets/image/food.jpg" },
    { id: 6, title: "INDIAN SPECIALTIES CHICKEN", image: "/src/assets/image/food.jpg" },
    { id: 7, title: "INDIAN SPECIALTIES NON-VEG", image: "/src/assets/image/food.jpg" },
    { id: 8, title: "SPECIAL RICE", image: "/src/assets/image/food.jpg" },
    { id: 9, title: "NEPALI THALI", image: "/src/assets/image/food.jpg" },
    { id: 10, title: "SEA FOOD SPECIAL", image: "/src/assets/image/food.jpg" },
    { id: 11, title: "NEPALI AUTHENTIC FOOD", image: "/src/assets/image/food.jpg" },
    { id: 12, title: "DESSERT", image: "/src/assets/image/food.jpg" },
    { id: 13, title: "CHUTNEY", image: "/src/assets/image/food.jpg" },
  ]);

  const menuItems = [
    {
      name: 'Beef Burger Meal',
      price: '$32',
      description: 'Classic greek salad, barrel aged feta cheese, bread',
      image: "/src/assets/image/food.jpg"
    },
    {
      name: 'Roasted Lamb Rump',
      price: '$25',
      description: 'Grilled lamb cutlets, pomegranate glaze, butternut squash',
      image: "/src/assets/image/food.jpg"
    },
    {
      name: 'Pan Seared Sea Bass',
      price: '$38',
      description: 'Saffron and mussel\'s broth, new potatoes, edamame beans',
      image: "/src/assets/image/food.jpg"
    },
    {
      name: 'King Prawns and Lobster',
      price: '$38',
      description: 'Creamy saffron, sauce Vierge',
      image: "/src/assets/image/food.jpg"
    },
    {
      name: 'Citrus Cured Salmon',
      price: '$41',
      description: 'Horseradish creme fraiche, beetroot mousse, oil',
      image: "/src/assets/image/food.jpg"
    },
    {
      name: 'Pan Seared Scallops',
      price: '$29',
      description: 'Saffron, celeriac puree, black pudding, olive oil',
      image: "/src/assets/image/food.jpg"
    },
    {
      name: 'Baked Camembert',
      price: '$25',
      description: 'Red onion marmalade, garlic Focaccia bread, grilled figs',
      image: "/src/assets/image/food.jpg"
    },
    {
      name: 'Braised Ox Cheek Ravioli',
      price: '$23',
      description: 'Mediterranean olives casserole, celeriac puree, mushrooms',
      image: "/src/assets/image/food.jpg"
    },
    {
      name: 'Corn Fed Chicken',
      price: '$17',
      description: 'Wild mushrooms, truffle potatoes, braised leeks, carrots',
      image: "/src/assets/image/food.jpg"
    },
    {
      name: 'Nduja Pork Chicken Terrine',
      price: '$41',
      description: 'Smoked duck breast, pistachio, smoked pancetta',
      image: "/src/assets/image/food.jpg"
    },
  ];

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  const scrollToPosition = useCallback((newPosition) => {
    if (menuContainerRef.current) {
      positionRef.current = newPosition;
      menuContainerRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
  }, []);

  const handleNavClick = (direction) => {
    if (!menuContainerRef.current) return;

    const scrollAmount = 500;
    let newPosition = positionRef.current;

    setTransitionEnabled(true);
    menuContainerRef.current.style.transition = 'transform 0.5s ease-in-out';

    if (direction === 'left') {
      newPosition += scrollAmount;
      if (newPosition > 0) newPosition = 0;
    } else {
      newPosition -= scrollAmount;
      const maxScroll = containerWidthRef.current - menuContainerRef.current.scrollWidth;
      if (newPosition < maxScroll) {
        newPosition = maxScroll;
      }
    }

    scrollToPosition(newPosition);

    setTimeout(() => {
      setTransitionEnabled(false);
      menuContainerRef.current.style.transition = 'none';
    }, 500);
  };

  const calculateCardWidth = (title) => {
    const baseWidth = 150;
    const charWidth = 8;
    const calculatedWidth = baseWidth + (title.length * charWidth);
    return Math.min(calculatedWidth, 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const updateContainerWidth = () => {
      if (menuContainerRef.current) {
        containerWidthRef.current = menuContainerRef.current.parentElement.clientWidth;
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const leftColumn = menuItems.slice(0, 5);
  const rightColumn = menuItems.slice(5, 10);

  return (
    <div className="relative overflow-hidden ">
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
      <div className="relative z-10 flex items-center justify-center h-[80vh] bg-black/20 backdrop-blur-[1px]">
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

      {/* Menu Horizontal Scroller Section */}
      <section className="relative z-10 bg-[#0b1315] py-10 px-6 pt-[160px]">
        <div className="flex flex-col items-center gap-2 text-white mb-10">
          <div className="text-4xl font-light mt-10 font2">We Serve you</div>
          <div className="text-5xl font-semibold tracking-wider font3">MENU</div>
        </div>

        {/* Navigation and Scrolling Cards Container */}
        <div className="flex items-center justify-center w-full">
          <button
            className="z-20 bg-opacity-80 text-black rounded-full w-12 h-12 backdrop-blur-sm bg-black/30 flex items-center justify-center hover:bg-opacity-100 transition-all mr-4"
            onClick={() => handleNavClick('left')}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25.109" height="34.906" viewBox="0 0 25.109 34.906">
              <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="24.67,34.59 11.653,17.464 24.67,0.338" />
              <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="13.688,34.59 0.671,17.464 13.688,0.338" />
            </svg>
          </button>

          <div className="w-[80vw] relative">
            <div
              className="overflow-hidden py-8"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                ref={menuContainerRef}
                className="flex gap-6 w-max"
                style={{
                  willChange: 'transform',
                  transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
                }}
              >
                {menuHeadItems.map((item) => {
                  const cardWidth = calculateCardWidth(item.title);
                  return (
                    <div
                      key={item.id}
                      className="group relative h-[50px] border border-[#C9AB81] rounded-2xl overflow-hidden flex-shrink-0"
                      style={{ width: `${cardWidth}px` }}
                    >
                      <div className="h-full transition-all duration-300 ease-in-out w-[50px] group-hover:w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="absolute left-[50px] top-0 h-full w-[calc(100%-50px)] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:w-0 overflow-hidden whitespace-nowrap text-white font4 text-md px-2">
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            className="z-20 bg-opacity-80 text-black rounded-full w-12 h-12 backdrop-blur-sm bg-black/30 flex items-center justify-center hover:bg-opacity-100 transition-all ml-4 rotate-180"
            onClick={() => handleNavClick('right')}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25.109" height="34.906" viewBox="0 0 25.109 34.906">
              <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="24.67,34.59 11.653,17.464 24.67,0.338" />
              <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="13.688,34.59 0.671,17.464 13.688,0.338" />
            </svg>
          </button>
        </div>

        <div className="text-center my-16">
          <p className="italic text-[#c5a86b] mb-2 font2">Special selection</p>
          <h2 className="text-4xl md:text-5xl text-[#f3c97c] tracking-wide uppercase mb-4 font11 font-bold">Appetizer</h2>
          <div className="flex justify-center mt-2">
            <div className="w-20 border-t border-[#c5a86b]"></div>
          </div>
        </div>

        {/* Menu Content Section */}
        <div className="flex justify-center items-start gap-14 my-20 px-8">
          {/* LEFT COLUMN (with images) */}
          <div className="space-y-8 w-full max-w-[500px]">
            {leftColumn.map((item, i) => (
              <div key={i} className="flex gap-4">

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1 gap-4">
                    <h3 className="uppercase text-sm tracking-widest text-[#f3c97c] font1 whitespace-nowrap">
                      {item.name}
                    </h3>
                    <div className="flex-1 flex justify-center">
                      <div className="relative w-full max-w-[200px]">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-b border-[#f3c97c] h-[2px] opacity-30"></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-[#f3c97c] font1 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 font4 mt-2">{item.description}</p>
                </div>
                <div className="w-[50px] h-[50px] flex-shrink-0 overflow-hidden rounded">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image || "/src/assets/image/food.jpg"}
                    alt={item.name}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN (without images) */}
          <div className="space-y-8 w-full max-w-[500px]">
            {rightColumn.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1 gap-4">
                    <h3 className="uppercase text-sm tracking-widest text-[#f3c97c] font1 whitespace-nowrap">
                      {item.name}
                    </h3>
                    <div className="flex-1 flex justify-center">
                      <div className="relative w-full max-w-[200px]">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-b border-[#f3c97c] h-[2px] opacity-30"></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-[#f3c97c] font1 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 font4 mt-2">{item.description}</p>
                </div>
                <div className="w-[50px] h-[50px] flex-shrink-0 overflow-hidden rounded">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMenu;