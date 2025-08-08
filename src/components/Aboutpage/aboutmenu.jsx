import React from 'react';

const menuItems = [
    { name: 'Beef Burger Meal', price: '$32', description: 'Classic greek salad, barrel aged feta cheese, bread' },
    { name: 'Roasted Lamb Rump', price: '$25', description: 'Grilled lamb cutlets, pomegranate glaze, butternut squash' },
    { name: 'Pan Seared Sea Bass', price: '$38', description: 'Saffron and mussel’s broth, new potatoes, edamame beans' },
    { name: 'King Prawns and Lobster', price: '$38', description: 'Creamy saffron, sauce Vierge' },
    { name: 'Citrus Cured Salmon', price: '$41', description: 'Horseradish creme fraiche, beetroot mousse, oil' },
    { name: 'Pan Seared Scallops', price: '$29', description: 'Saffron, celeriac puree, black pudding, olive oil' },
    { name: 'Baked Camembert', price: '$25', description: 'Red onion marmalade, garlic Focaccia bread, grilled figs' },
    { name: 'Braised Ox Cheek Ravioli', price: '$23', description: 'Mediterranean olives casserole, celeriac puree, mushrooms' },
    { name: 'Corn Fed Chicken', price: '$17', description: 'Wild mushrooms, truffle potatoes, braised leeks, carrots' },
    { name: 'Nduja Pork Chicken Terrine', price: '$41', description: 'Smoked duck breast, pistachio, smoked pancetta' },
];

export default function FromOurMenuSection() {
    const leftColumn = menuItems.slice(0, 5);
    const rightColumn = menuItems.slice(5, 10);

    return (
        <section className="relative bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] text-white font-serif py-20 px-6 md:px-24">
            <svg className='absolute bottom-[-130px] -left-10' xmlns="http://www.w3.org/2000/svg" width="326.209" height="326">...</svg>

            <div className="text-center mb-12">
                <p className="mb-2 not-italic font-normal text-[19px] leading-[28px] text-[rgb(201,171,129)] font2">Special selection</p>
                <h2 className="text-4xl md:text-5xl text-[#f3c97c] tracking-wide uppercase mb-4 font-bold">From Our Menu</h2>
                <div className="flex justify-center mt-2">
                    <div className="w-20 border-t border-[#c5a86b]"></div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-14">
                <div className="space-y-8 w-full lg:w-[35vw]">
                    {leftColumn.map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-center mb-1 gap-2">
                                <h3 className="uppercase text-sm text-[#f3c97c] tracking-[2px] font-medium text-[14px] leading-[30px] font1">{item.name}</h3>
                                <div className='flex justify-center items-center flex-col gap-1 w-[40%] md:w-[50%]'>
                                    <div className="border-t-[1px] border-[#f3c97c] w-full"></div>
                                    <div className="border-b-[1px] border-[#f3c97c] w-full"></div>
                                </div>
                                <span className="text-sm text-[#f3c97c] font-medium text-[14px] leading-[30px] tracking-[2px] font1">{item.price}</span>
                            </div>
                            <p className="text-sm text-gray-300 font4">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-8 w-full lg:w-[35vw]">
                    {rightColumn.map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-center mb-1 gap-2">
                                <h3 className="uppercase text-sm text-[#f3c97c] font-medium text-[14px] leading-[30px] tracking-[2px] font1">{item.name}</h3>
                                <div className='flex justify-center items-center flex-col gap-1 w-[40%] md:w-[50%]'>
                                    <div className="border-t-[1px] border-[#f3c97c] w-full"></div>
                                    <div className="border-b-[1px] border-[#f3c97c] w-full"></div>
                                </div>
                                <span className="text-sm text-[#f3c97c] font-medium text-[14px] leading-[30px] tracking-[2px] font1">{item.price}</span>
                            </div>
                            <p className="text-sm text-gray-300 font4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <button className="font1 uppercase border border-[#c5a86b] text-white text-xs px-6 py-3 hover:bg-[#c5a86b] hover:text-black transition-all duration-300">
                    View All
                </button>
            </div>
        </section>
    );
}
