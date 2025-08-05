import React from 'react'

const links = () => {
  return (
                <section className='py-36 bg-[#0b1315] flex justify-center items-center flex-col gap-7 border-t border-[#b39770]'>
                <div className="logo">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34.875px" height="46.938px" viewBox="0 0 34.875 46.938" enable-background="new 0 0 34.875 46.938" xml:space="preserve"><polyline fill="none" stroke="#C9AB81" stroke-miterlimit="10" points="0.5,0.003 0.5,36.438 22.875,36.438 "></polyline><polyline fill="none" stroke="#C9AB81" stroke-miterlimit="10" points="6.5,5.003 6.5,41.438 28.875,41.438 "></polyline><polyline fill="none" stroke="#C9AB81" stroke-miterlimit="10" points="12.5,10.003 12.5,46.438 34.875,46.438 "></polyline></svg>
                </div>
                <div className='text-white flex justify-center items-center gap-3    flex-col my-7 text-xl'>
                    <div className="name">Laurent Restaurant & Fine dining, 71 Madison Ave</div>
                    <div className="add">10013 New York, 914-309-7030, reservations@laurent.com</div>
                    <div className="time">Open: 09:00 am – 01:00 pm </div>
                </div>
                <div className="links flex justify-center items-center gap-3 flex-col">
                    <a href="#" className='text-white text-xl '>Facebook</a>
                    <a href="#" className='text-white text-xl'>Instagram</a>
                    <a href="#" className='text-white text-xl'>Trip Advisor</a>
                </div>

            </section>
  )
}

export default links