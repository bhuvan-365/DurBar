import React, { useState, useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const OurMenu = () => {
  const [offsetY, setOffsetY] = useState(0);
  const tabsContainerRef = useRef(null);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("menu-1");

  const [menuHeadItems] = useState([
    { id: 1, title: "APPETIZER", image: "/assets/image/food.jpg" },
    { id: 2, title: "TANDOORI", image: "/assets/image/food.jpg" },
    { id: 3, title: "BREADS", image: "/assets/image/food.jpg" },
    { id: 4, title: "INDIAN SPECIALTIES VEG", image:"/assets/image/food.jpg" },
    { id: 5, title: "VEGAN ITEMS", image: "/assets/image/food.jpg" },
    { id: 6, title: "INDIAN SPECIALTIES CHICKEN", image: "/assets/image/food.jpg" },
    { id: 7, title: "INDIAN SPECIALTIES NON-VEG", image: "/assets/image/food.jpg" },
    { id: 8, title: "SPECIAL RICE", image: "/assets/image/food.jpg" },
    { id: 9, title: "NEPALI THALI", image: "/assets/image/food.jpg" },
    { id: 10, title: "SEA FOOD SPECIAL", image: "/assets/image/food.jpg" },
    { id: 11, title: "NEPALI AUTHENTIC FOOD", image: "/assets/image/food.jpg" },
    { id: 12, title: "DESSERT", image: "/assets/image/food.jpg" },
    { id: 13, title: "CHUTNEY", image: "/assets/image/food.jpg" },
  ]);

  const menuItems = [
    [
      {
        name: 'Beef Burger Meal',
        price: '$32',
        description: 'Classic greek salad, barrel aged feta cheese, bread',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Roasted Lamb Rump',
        price: '$25',
        description: 'Grilled lamb cutlets, pomegranate glaze, butternut squash',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Pan Seared Sea Bass',
        price: '$38',
        description: "Saffron and mussel's broth, new potatoes, edamame beans",
        image: "/assets/image/food.jpg"
      },
      {
        name: 'King Prawns and Lobster',
        price: '$38',
        description: 'Creamy saffron, sauce Vierge',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Citrus Cured Salmon',
        price: '$41',
        description: 'Horseradish creme fraiche, beetroot mousse, oil',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Pan Seared Scallops',
        price: '$29',
        description: 'Saffron, celeriac puree, black pudding, olive oil',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Baked Camembert',
        price: '$25',
        description: 'Red onion marmalade, garlic Focaccia bread, grilled figs',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Braised Ox Cheek Ravioli',
        price: '$23',
        description: 'Mediterranean olives casserole, celeriac puree, mushrooms',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Corn Fed Chicken',
        price: '$17',
        description: 'Wild mushrooms, truffle potatoes, braised leeks, carrots',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Nduja Pork Chicken Terrine',
        price: '$41',
        description: 'Smoked duck breast, pistachio, smoked pancetta',
        image: "/assets/image/food.jpg"
      },
    ],
    [
      {
        name: 'xxxxx',
        price: '$32',
        description: 'Classic greek salad, barrel aged feta cheese, bread',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Roasted Lamb Rump',
        price: '$25',
        description: 'Grilled lamb cutlets, pomegranate glaze, butternut squash',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Pan Seared Sea Bass',
        price: '$38',
        description: "Saffron and mussel's broth, new potatoes, edamame beans",
        image: "/assets/image/food.jpg"
      },
      {
        name: 'King Prawns and Lobster',
        price: '$38',
        description: 'Creamy saffron, sauce Vierge',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Citrus Cured Salmon',
        price: '$41',
        description: 'Horseradish creme fraiche, beetroot mousse, oil',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Pan Seared Scallops',
        price: '$29',
        description: 'Saffron, celeriac puree, black pudding, olive oil',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Baked Camembert',
        price: '$25',
        description: 'Red onion marmalade, garlic Focaccia bread, grilled figs',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Braised Ox Cheek Ravioli',
        price: '$23',
        description: 'Mediterranean olives casserole, celeriac puree, mushrooms',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Corn Fed Chicken',
        price: '$17',
        description: 'Wild mushrooms, truffle potatoes, braised leeks, carrots',
        image: "/assets/image/food.jpg"
      },
      {
        name: 'Nduja Pork Chicken Terrine',
        price: '$41',
        description: 'Smoked duck breast, pistachio, smoked pancetta',
        image: "/assets/image/food.jpg"
      },
    ],
  ];

  // Calculate card width responsively
  const calculateCardWidth = (title) => {
    const baseWidth = window.innerWidth < 640 ? 120 : 150; // Responsive base width
    const charWidth = 8;
    const calculatedWidth = baseWidth + (title.length * charWidth);
    return Math.min(calculatedWidth, 300);
  };

  // Scroll tab triggers left or right
  const scrollTabs = (direction) => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const containerWidth = container.parentElement.clientWidth;
    const totalWidth = Array.from(container.children).reduce(
      (sum, child) => sum + child.clientWidth + 3,
      0
    );

    if (direction === 'left') {
      setVisibleStartIndex((prev) => Math.max(0, prev - 1));
    } else {
      if (
        visibleStartIndex * (calculateCardWidth(menuHeadItems[0].title) + 3) + containerWidth <
        totalWidth
      ) {
        setVisibleStartIndex((prev) => prev + 1);
      }
    }
  };

  const isLeftDisabled = visibleStartIndex === 0;
  const isRightDisabled = () => {
    const container = tabsContainerRef.current;
    if (!container) return true;

    const containerWidth = container.parentElement.clientWidth;
    const totalWidth = Array.from(container.children).reduce(
      (sum, child) => sum + child.clientWidth + 3,
      0
    );

    return (
      visibleStartIndex * (calculateCardWidth(menuHeadItems[0].title) + 3) + containerWidth >=
      totalWidth
    );
  };

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Touch support for mobile swipe
  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;

    let startX = 0;
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) scrollTabs('right');
      if (endX - startX > 50) scrollTabs('left');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [visibleStartIndex]); // added dependency


  const NavButton = ({ direction, onClick, disabled }) => {
    const iconPaths = {
      left: "M15 19l-7-7 7-7",
      right: "M9 5l7 7-7 7"
    };

    return (
      <button
        onClick={() => onClick(direction)}
        disabled={disabled}
        className={`p-2 rounded-full transition-all ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700 hover:bg-opacity-50'
        }`}
        aria-label={`Scroll ${direction}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#C9AB81"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={iconPaths[direction]}
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="relative overflow-hidden">
        
              {/* Parallax Banner */}
      <div
        className="absolute top-0 left-0 w-full h-[100vh] bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/assets/image/homebanner.jpg')`,
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      />

               {/* Header */}
      <div className="relative z-10 flex items-center justify-center h-[80vh] bg-black/20 backdrop-blur-[1px]">
        <div className="flex justify-center items-center gap-8 text-[#C9AB81]">
          <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881 8.576L20.562.591.244 8.576"
            />
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881.591L20.562 8.576.243.591"
            />
          </svg>
          <h2 className="text-6xl font-normal tracking-widest text-center">OUR MENU</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881 8.576L20.562.591.244 8.576"
            />
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881.591L20.562 8.576.243.591"
            />
          </svg>
        </div>
      </div>
      {/* Menu Section */}
      <section className="relative z-10 bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] py-10 px-6 pt-[160px]">
        <div className="flex flex-col items-center gap-2 text-white mb-10">
          <div className="text-lg text-[#C9AB81] font-light mt-10 font2">We Serve you</div>
          <div className="text-5xl tracking-wider not-italic font-bold text-[48px] leading-[61px] font3">
            MENU
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="relative max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between mb-4 gap-4">
              <NavButton 
                direction="left"
                onClick={scrollTabs}
                disabled={isLeftDisabled}
              />

              <div className="flex-1 overflow-hidden">
                <TabsList
                  ref={tabsContainerRef}
                  className="flex transition-transform duration-300 gap-[3px] h-[60px] px-2 mx-auto"
                  style={{
                    transform: `translateX(-${visibleStartIndex * (calculateCardWidth(menuHeadItems[0].title) + 3)}px)`,
                    width: 'calc(100% - 80px)' // Adjust based on button sizes
                  }}
                >
                  {menuHeadItems.map((item) => (
                    <TabsTrigger key={item.id} value={`menu-${item.id}`} className="flex-shrink-0">
                      <div
                        className="group relative ml-[2px] h-[50px] border border-[#C9AB81] rounded-lg overflow-hidden"
                        style={{ width: `${calculateCardWidth(item.title)}px` }}
                      >
                        <div className="h-full transition-all duration-300 ease-in-out w-[50px] group-hover:w-full">
                          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="absolute left-[50px] top-0 h-full w-[calc(100%-50px)] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:w-0 overflow-hidden whitespace-nowrap text-white text-sm md:text-md px-2">
                          {item.title}
                        </div>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <NavButton
                direction="right"
                onClick={scrollTabs}
                disabled={isRightDisabled()}
              />
            </div>

                      {/* TabsContent with Category Header inside each */}
              {menuHeadItems.map((headItem, index) => (
                <TabsContent key={headItem.id} value={`menu-${headItem.id}`}>
                  <div className="text-center mt-16 mb-5">
                    <p className="mb-2 not-italic font-normal text-[19px] leading-[28px] text-[rgb(201,171,129)] font2">
                      Special selection
                    </p>
                    <h2 className="text-4xl md:text-5xl text-[#f3c97c] tracking-wide uppercase mb-4 font-bold">
                      {headItem.title}
                    </h2>
                    <div className="flex justify-center mt-2">
                      <div className="w-20 border-t border-[#c5a86b]"></div>
                    </div>
                  </div>

                  <div className="my-8 grid md:grid-cols-2 gap-8">
                    {menuItems[index % menuItems.length]?.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1 gap-4">
                            <h3 className="uppercase text-sm text-[#f3c97c] font-medium text-[14px] leading-[30px] tracking-[2px] font1 whitespace-nowrap">
                              {item.name}
                            </h3>
                            <span className="text-sm text-[#f3c97c] font-medium text-[14px] leading-[30px] tracking-[2px] font1 whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 font4 mt-2">{item.description}</p>
                        </div>
                        <div className="w-[50px] h-[50px] flex-shrink-0 overflow-hidden rounded">
                          <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default OurMenu;