const ContactUs = () => {
  return (
    <section className="bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] text-[#e2c08d] font-serif py-20 px-4 md:px-16">
      <div className="text-center not-italic font-bold text-3xl sm:text-4xl md:text-[48px] leading-snug font3 mt-16">
        Our Location
      </div>

      <div className="flex justify-center items-center py-12 px-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.816872676086!2d-73.99161138459322!3d40.74329997932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdefabcdef1234!2sSome+Place!5e0!3m2!1sen!2sus!4v1615197737710!5m2!1sen!2sus"
          className="w-full md:w-[80%] h-[300px] md:h-[400px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-0">
        {/* Left: Contact Form */}
        <div>
          <p className="text-center text-sm mb-2 not-italic font-normal text-[19px] leading-[28px] text-[rgb(201,171,129)] font2">
            Write to us
          </p>

          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 text-[#C9AB81] my-6 md:my-8 flex-wrap">
            <div className="decor">
              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-normal tracking-widest text-center">
              Contact Us
            </h2>
            <div className="decor">
              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576" />
                <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591" />
              </svg>
            </div>
          </div>

          <form className="space-y-4 text-white font-pop">
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
            />
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="border border-[#c5a86b] px-6 py-2 text-[#e2c08d] tracking-widest hover:bg-[#c5a86b] hover:text-black transition font1"
              >
                SEND
              </button>
            </div>
          </form>
        </div>

        {/* Right: Locations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white text-sm">
          {['MANHATTAN', 'RAHWAY', 'BROOKLIN', 'NEW JERSEY'].map((city, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-[#e2c08d] font-medium text-[14px] leading-[30px] tracking-[2px] font1">
                {city}
              </h3>
              <p className="font-pop">71 Madison Ave</p>
              <p className="font-pop">914-309-7011 , 914-329-2131</p>
              <p className="font-pop">reservations@laurent.com</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
