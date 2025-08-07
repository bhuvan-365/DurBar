

const ContactUs = () => {


  return (
    <section className="bg-[#0b1315] text-[#e2c08d] font-serif py-20 px-32 md:px-16">
      <div className="head text-center font3 mt-20">Our Location</div>
      <div className=' flex justify-center items-center py-18 pb-32'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.816872676086!2d-73.99161138459322!3d40.74329997932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdefabcdef1234!2sSome+Place!5e0!3m2!1sen!2sus!4v1615197737710!5m2!1sen!2sus"
          width="60%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left: Contact Form */}
        <div>
          <p className="italic text-center text-sm mb-2 font2">Write to us</p>
          <div className="flex justify-center items-center gap-8 text-[#C9AB81] my-8">
            <div className="decor">
              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
              </svg>
            </div>
            <h2 className="text-5xl font-normal tracking-widest">Contact Us</h2>
            <div className="decor">
              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
              </svg>
            </div>
          </div>

          <form className="space-y-6 text-white font-pop">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border border-[#c5a86b] px-4 py-2 outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-transparent border border-[#c5a86b] px-4 py-2 outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border border-[#c5a86b] px-4 py-2 h-32 resize-none outline-none"
            ></textarea>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="border border-[#c5a86b] px-8 py-2 text-[#e2c08d] tracking-widest hover:bg-[#c5a86b] hover:text-black transition font1"
              >
                SEND
              </button>
            </div>
          </form>
        </div>

        {/* Right: Locations */}
        <div className="grid grid-cols-2 gap-10 text-white text-sm">
          {/* Manhattan */}
          <div className="space-y-2 h-16">
            <h3 className="text-[#e2c08d] text-lg font-semibold tracking-widest font1 ">MANHATTAN</h3>
            <p className='font-pop'>71 Madison Ave</p>
            <p className='font-pop'>914-309-7011 , 914-329-2131</p>
            <p className='font-pop'>reservations@laurent.com</p>
          </div>

          {/* Rahway */}
          <div className="space-y-2">
            <h3 className="text-[#e2c08d] text-lg font-semibold tracking-widest font1">RAHWAY</h3>
            <p className='font-pop'>71 Madison Ave</p>
            <p className='font-pop'>914-309-7011 , 914-329-2131</p>
            <p className='font-pop'>reservations@laurent.com</p>
          </div>

          {/* Brooklin */}
          <div className="space-y-2">
            <h3 className="text-[#e2c08d] text-lg font-semibold tracking-widest font1">BROOKLIN</h3>
            <p className='font-pop'>71 Madison Ave</p>
            <p className='font-pop'>914-309-7011 , 914-329-2131</p>
            <p className='font-pop'>reservations@laurent.com</p>
          </div>

          {/* New Jersey */}
          <div className="space-y-2">
            <h3 className="text-[#e2c08d] text-lg font-semibold tracking-widest font1">NEW JERSEY</h3>
            <p className='font-pop'>71 Madison Ave</p>
            <p className='font-pop'>914-309-7011 , 914-329-2131</p>
            <p className='font-pop'>reservations@laurent.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
