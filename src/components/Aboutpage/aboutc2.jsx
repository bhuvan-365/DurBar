import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const testimonials = [
  {
    text: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam orem ipsum dolor sit amet consectetur.",
    author: "ANDREA CHUNG",
    role: "Cook",
    image: "/assets/image/p1.jpg" 
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "MARIO ROSSI",
    role: "Chef de Cuisine",
    image: "/assets/image/p2.jpg" 
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: "ISABEL LEE",
    role: "Pastry Chef",
    image: "/assets/image/p1.jpg"
  }
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef();

  const slideInText = (nextIndex) => {
    const direction = nextIndex > index ? 1 : -1;

    gsap.fromTo(
      quoteRef.current,
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

  const { text, author, role, image } = testimonials[index]; // Destructure image from testimonial

  return (
    <section className="flex flex-col justify-center items-center my-16 h-[80vh] w-full text-white font-serif bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)]">
        
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="italic mb-2 font-normal text-[19px] leading-[28px] text-[rgb(201,171,129)] font2">
          Our guest reviews
        </p>
        <h2 className="text-[48px] leading-[61px] font-bold tracking-widest text-[#b39770] mb-4 font3">
          <span className="inline-block w-12 border-t-2 border-[hsl(35,31%,57%)] mr-4 align-middle" />
          Testimonials
          <span className="inline-block w-12 border-t-2 border-[#b39770] ml-4 align-middle" />
        </h2>
      </div>

      <div className="w-full flex flex-col justify-center items-center text-center gap-8">
        <div className="h-[80px] w-[80px] text-4xl text-center text-[#c5a86b] mb-6 rounded-full overflow-hidden object-center object-cover">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>

        <div ref={quoteRef} className="max-w-lg">
          <p className="text-base text-center sm:text-lg not-italic font-normal text-[19px] leading-[28px] text-[rgb(201,171,129)] font2">
            {text}
          </p>
          <h3 className="mt-6 text-center text-[#f3c97c] text-base sm:text-lg font1 font-medium text-[14px] leading-[30px] tracking-[2px]">
            {author}
          </h3>
          <p className="text-sm text-center text-gray-400">{role}</p>
        </div>

        {/* Navigation */}
        <div className="bottom-6 md:bottom-10 flex space-x-4 font1 font-medium text-[14px] leading-[30px] tracking-[2px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => slideInText(i)}
              className={`text-xs sm:text-sm font-semibold px-2 transition-all duration-300 border-b-2 ${
                index === i
                  ? 'border-[#c5a86b] text-[#c5a86b]'
                  : 'border-transparent text-gray-400'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}