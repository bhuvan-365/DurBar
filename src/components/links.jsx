// components/Footer.tsx
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa';
import { MdAccessTime, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className=" bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)] text-white px-6 md:px-16 py-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-[#f3c97c] mb-1">DurBar</h2>
          <p className="text-sm mb-6 text-gray-400">Nepali and Indian Cuisine</p>

          <div className="flex items-start gap-2 mb-2 text-sm text-gray-300">
            <MdAccessTime className="mt-1 text-[#f3c97c] " />
            <span className='font4'>
              Mo-Fr: 8:00 am - 10:00 pm<br />
              Sa-Su: 10:00 am - 11:00 pm
            </span>
          </div>

          <div className="flex items-start gap-2 mb-2 text-sm text-gray-300">
            <MdLocationOn className="mt-1 text-[#f3c97c]" />
            <span   className='font4'>9870 St Vincent Place,<br />Glasgow, DC 29 Fr 62</span>
          </div>

          <div className="flex items-center gap-2 mb-2 text-sm text-gray-300">
            <MdPhone className="text-[#f3c97c]" />
            <span  className='font4'>+1 800 602 6032</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MdEmail className="text-[#f3c97c]" />
            <span  className='font4'>mail@demolink.com</span>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-md font-semibold text-white mb-4 border-b border-[#f3c97c] inline-block pb-1 ">
            USEFULL LINKS
          </h3>
          <ul className="text-gray-400 space-y-2 text-sm font4">
            <li>About</li>
            <li>Reservation</li>
            <li>Help Center</li>
            <li>Our Blog</li>
            <li>Career</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Latest Blog Post */}
        <div>
          <h3 className="text-md font-semibold text-white mb-4 border-b border-[#f3c97c] inline-block pb-1 font-pop">
            LATEST BLOG POST
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <img src="/assets/image/food.jpg" alt="Good Wine" className="rounded-md w-14 h-14 object-cover" />
              <div>
                <p className="text-white font4">Good Wine</p>
                <p className="text-xs text-gray-500 font4">12th Jan 2017</p>
              </div>
            </li>
            <li className="flex gap-3">
              <img src="/assets/image/food.jpg" alt="Spring Eats" className="rounded-md w-14 h-14 object-cover" />
              <div>
                <p className="text-white font4">Spring Eats</p>
                <p className="text-xs text-gray-500 font4">13th Jan 2017</p>
              </div>
            </li>
            <li className="flex gap-3">
              <img src="/assets/image/food.jpg" alt="Summer Desert" className="rounded-md w-14 h-14 object-cover" />
              <div>
                <p className="text-white font4">Summer Desert</p>
                <p className="text-xs text-gray-500 font4">15th Jan 2017</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="text-md font-semibold text-white mb-4 border-b border-[#f3c97c] inline-block pb-1 ">
            INSTAGRAM
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <img
                key={i}
                src='/assets/image/food2.jpg'
                alt={`Instagram ${i + 1}`}
                className="rounded w-full h-16 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>durbar.com © 2017 All Rights Reserved. Terms of use and <span className="text-white underline cursor-pointer">Privacy Policy</span></p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <FaFacebookF className="hover:text-[#f3c97c] cursor-pointer" />
          <FaTwitter className="hover:text-[#f3c97c] cursor-pointer" />
          <FaGooglePlusG className="hover:text-[#f3c97c] cursor-pointer" />
          <FaInstagram className="hover:text-[#f3c97c] cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
