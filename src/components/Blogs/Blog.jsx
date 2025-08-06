import React from 'react';

const BlogStandard = () => {
  return (
    <div className="bg-[#0b1315] text-white min-h-screen font-sans px-4 py-10 lg:px-20 pt-52 ">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-lg text-[#C9AB81] tracking-widest">BLOG STANDARD</h1>
        <p className="text-sm text-gray-400 mt-2">Home / Blog Standard</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <main className="lg:w-2/3">
          <div>
            {/* Blog Image */}
            <img
              src="/src/assets/image/interior.jpg" // Replace with actual path
              alt="Elegant Food"
              className="w-full h-auto rounded-md mb-6"
            />

            {/* Meta */}
            <p className="text-sm text-gray-500 mb-2">
              Donna Johnson • October 5, 2019 • World restaurants
            </p>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-4 text-[#E7D9C6]">ELEGANT FOOD</h2>

            {/* Description */}
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>

            {/* Read More */}
            <button className="text-sm uppercase tracking-wide text-[#C9AB81] border-b border-[#C9AB81] hover:text-white">
              Read More
            </button>
          </div>

          {/* Quote Section */}
          <div className="bg-[#101214] p-8 mt-12 border-l-4 border-[#C9AB81]">
            <p className="font2 text-center text-[#C9AB81] my-4">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore magna.”
            </p>
            <p className="text-sm text-white font1 text-center">Justin Roy</p>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-10">
          {/* About */}
          <div>
            <h3 className="text-[#C9AB81] font-semibold mb-3">ABOUT</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[#C9AB81] font-semibold mb-3">CATEGORIES</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Elegant food</li>
              <li>Recipes</li>
              <li>World restaurants</li>
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div>
            <h3 className="text-[#C9AB81] font-semibold mb-3">INSTAGRAM</h3>
            <div className="grid grid-cols-3 gap-2">
              {/* Replace with real image URLs */}
              <img src="/src/assets/image/food.jpg" alt="" className="w-full h-[60px] object-cover" />
              <img src="/src/assets/image/food2.jpg" alt="" className="w-full h-[60px] object-cover" />
              <img src="/src/assets/image/chef.jpg" alt="" className="w-full h-[60px] object-cover" />
              <img src="/src/assets/image/food.jpg" alt="" className="w-full h-[60px] object-cover" />
              <img src="/src/assets/image/food2.jpg" alt="" className="w-full h-[60px] object-cover" />
              <img src="/src/assets/image/interior.jpg" alt="" className="w-full h-[60px] object-cover" />
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-[#C9AB81] font-semibold mb-3">TAGS</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-[#1A1C1E] px-3 py-1 rounded-full text-gray-300">Dessert</span>
              <span className="bg-[#1A1C1E] px-3 py-1 rounded-full text-gray-300">Food</span>
              <span className="bg-[#1A1C1E] px-3 py-1 rounded-full text-gray-300">Menu</span>
              <span className="bg-[#1A1C1E] px-3 py-1 rounded-full text-gray-300">Recipes</span>
              <span className="bg-[#1A1C1E] px-3 py-1 rounded-full text-gray-300">Restaurant</span>
              <span className="bg-[#1A1C1E] px-3 py-1 rounded-full text-gray-300">Style</span>
            </div>
          </div>

          {/* Search */}
          <div>
            <h3 className="text-[#C9AB81] font-semibold mb-3">SEARCH</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Type here"
                className="w-full bg-transparent border border-[#C9AB81] px-4 py-2 text-sm placeholder-gray-500 text-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#C9AB81]">
                🔍
              </button>
            </div>
          </div>
        </aside>
      </div>

      <div className="video my-20 flex justify-center items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xPPLbEFbCAo?si=ML1CgI6UFnX2MHha" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default BlogStandard;
