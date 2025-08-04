import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const testimonials = [
  {
    text: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam orem ipsum dolor sit amet consectetur.",
    author: "ANDREA CHUNG",
    role: "Cook"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "MARIO ROSSI",
    role: "Chef de Cuisine"
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: "ISABEL LEE",
    role: "Pastry Chef"
  }
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef();

  const slideInText = (nextIndex) => {
    const direction = nextIndex > index ? 1 : -1;

    gsap.fromTo(quoteRef.current, 
      { x: 100 * direction, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );

    setIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % testimonials.length;
      slideInText(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const { text, author, role } = testimonials[index];

  return (
    <section className="flex h-[80vh] w-full text-white font-serif bg-[#0e1b1d]">
      {/* LEFT */}
      <div className="w-1/2 flex flex-col justify-center items-center px-28 relative">
        <div className="text-4xl text-[#c5a86b] mb-6">”</div>
        <div ref={quoteRef} className="text-center max-w-lg">
          <p className="text-lg italic leading-relaxed text-white font2 w-xs">{text}</p>
          <h3 className="mt-6 tracking-widest text-[#f3c97c] text-lg font-bold font1">{author}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>

        {/* Numbered Navigation with Underline */}
        <div className="absolute bottom-10 flex space-x-6 font1">
          {[0, 1, 2].map(i => (
            <button
              key={i}
              onClick={() => slideInText(i)}
              className={`text-xs font-semibold px-2 transition-all duration-300 border-b-2 ${
                index === i ? 'border-[#c5a86b] text-[#c5a86b]' : 'border-transparent text-gray-400'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2">
        <img
          src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-4.jpg"
          alt="Dish"
          className="w-full h-[80vh] object-cover"
        />
      </div>
    </section>
  );
}
