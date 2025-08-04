import React from 'react'
import About from './homeabt'

const home = () => {
    return (
        <>
            <section>
                {/* bg-[url('/src/assets/image/homebanner.jpg')] */}
                <div className=" h-screen bg-[#0e1730] bg-cover bg-center">
                    <div className="top h-[25vh] w-full "></div>
                    <div className="bottom h-[75vh] w-full">
                        <div className="banner flex justify-center items-center gap-8">
                            <button className='text-white uppercase border-[2px] w-[25vw] py-3 px-16 font-semibold text-2xl hover:text-black hover:bg-[#f0bd69] border-[#f0bd69]'>RESERVETION</button>
                            <button className='text-white uppercase border-[2px] w-[25vw] py-3 px-16 font-semibold text-2xl hover:text-black hover:bg-[#f0bd69] border-[#f0bd69] '>gifts</button>
                        </div>
                        <div className='flex justify-between items-center px-40  mt-16 text-white uppercase  font-normal text-2xl tracking-wide'>
                        </div>
                        <div className="parent flex justify-around items-center ">
                            <div className="box  w-[270px] h-[370px] rounded-t-full overflow-hidden">
                                <img src="/src/assets/image/food.jpg" alt="" />
                            </div>
                            <div className="box w-[270px] h-[370px] rounded-t-full overflow-hidden">
                                <img src="/src/assets/image/food.jpg" alt="" />
                            </div>
                            <div className="box w-[270px] h-[370px] rounded-t-full overflow-hidden">
                                <img src="/src/assets/image/food.jpg" alt="" />
                            </div>
                            <div className="box w-[270px] h-[370px] rounded-t-full overflow-hidden">
                                <img src="/src/assets/image/food.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <About />
        </>
    )
}

export default home