import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import restaurantExterior from './interior.jpg';
import chefsImage from './chef.jpg';

export default function About() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -80,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: -150,
      duration: 1.2,
      delay: 0.4,
      ease: "power3.out"
    });

    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.25,
      delay: 0.8,
      ease: "circ.out"
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0e1730] text-amber-100 py-16 px-4 sm:px-8 lg:px-16 overflow-x-hidden">
      {/* Dark overlay to improve contrast */}
      <div className="absolute inset-0  opacity-60 z-0"></div>

      {/* Content wrapper */}
      <div className="relative z-10">

        {/* Header */}
        <header className="mb-20 text-center">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold mb-6 font-serif tracking-wider text-amber-400"
            style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
              WebkitTextStroke: '1px rgba(0,0,0,0.3)'
            }}
          >
            ABOUT
          </h1>

          <div className="flex justify-center space-x-10 mb-12">
            <span className="text-amber-500 text-2xl">•</span>
            <span className="text-amber-500 text-2xl">•</span>
            <span className="text-amber-500 text-2xl">•</span>
          </div>
        </header>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative group transform hover:-translate-y-2 transition-transform duration-500 overflow-visible"
          >
            <img
              src={restaurantExterior}
              alt="DurBar Restaurant exterior"
              className="w-full h-auto rounded-xl shadow-2xl shadow-amber-900/50 transform group-hover:scale-103 transition-all duration-500 brightness-95 hover:brightness-100"
            />
            <div className="absolute inset-0 border-8 border-amber-500/70 rounded-xl pointer-events-none transform translate-x-6 translate-y-6 -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-all duration-500 shadow-lg shadow-black/30"></div>
            <div className="absolute -bottom-8 -right-8 bg-amber-500 text-stone-900 px-6 py-3 rounded-xl font-bold text-xl rotate-3 shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-amber-600/50 transition-all">
              Since 1995
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-10">
            <h2 className="text-4xl font-bold text-amber-400 font-serif border-b-2 border-amber-500 pb-3 inline-block">
              Our Heritage
            </h2>
            <p className="text-xl leading-relaxed text-amber-100">
              In the vibrant heart of Nepal, <span className="font-bold text-amber-300">DurBar Nepali & Indian Cuisine</span> has been crafting culinary masterpieces since 1995. From humble beginnings as a family kitchen, we've grown into a celebrated destination where authentic flavors dance with royal hospitality.
            </p>
            <div className="relative bg-stone-800/90 p-8 rounded-xl border-l-8 border-amber-500 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-amber-500/20 transition-all">
              <blockquote className="italic text-2xl leading-relaxed text-amber-50">
                "We don't just serve meals, we serve legacies. Each recipe carries the soul of our ancestors, the spirit of our mountains, and the warmth of our home."
              </blockquote>
              <p className="mt-6 text-amber-300 font-semibold text-lg">— The Thapa Family, Founders</p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="bg-stone-800 p-6 rounded-xl flex-1 min-w-[220px] text-center hover:bg-stone-700 transition-all shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-amber-500/10">
                <h3 className="text-amber-400 font-bold text-2xl mb-3">100+</h3>
                <p className="text-lg">Authentic Dishes</p>
              </div>
              <div className="bg-stone-800 p-6 rounded-xl flex-1 min-w-[220px] text-center hover:bg-stone-700 transition-all shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-amber-500/10">
                <h3 className="text-amber-400 font-bold text-2xl mb-3">28</h3>
                <p className="text-lg">Years of Excellence</p>
              </div>
              <div className="bg-stone-800 p-6 rounded-xl flex-1 min-w-[220px] text-center hover:bg-stone-700 transition-all shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-amber-500/10">
                <h3 className="text-amber-400 font-bold text-2xl mb-3">3</h3>
                <p className="text-lg">Generations of Mastery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <section className="mt-28 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-400 font-serif underline underline-offset-8 decoration-amber-500/60">
            Our Culinary Legacy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-stone-800/90 rounded-xl overflow-hidden shadow-2xl shadow-black/40 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-2">
              <img
                src={chefsImage}
                alt="DurBar chefs at work"
                className="w-full h-80 object-cover brightness-90 hover:brightness-100 transition-all"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-amber-300">Master Chefs</h3>
                <p className="text-lg">Trained in royal kitchens of Nepal and India, our chefs bring decades of expertise to every dish, preserving ancient techniques while innovating for modern palates.</p>
              </div>
            </div>

            <div className="bg-stone-800/90 rounded-xl p-8 flex flex-col justify-center shadow-2xl shadow-black/40 border-t-4 border-amber-500 hover:shadow-amber-500/20 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-amber-300">The DurBar Difference</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-amber-400 text-2xl mr-3">✓</span>
                  <span className="text-lg">Hand-ground spices from Nepal and India's finest markets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 text-2xl mr-3">✓</span>
                  <span className="text-lg">Centuries-old recipes preserved in our family manuscripts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 text-2xl mr-3">✓</span>
                  <span className="text-lg">Farm-fresh ingredients sourced from local producers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 text-2xl mr-3">✓</span>
                  <span className="text-lg">Dining ambiance that reflects Nepal's royal heritage</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Signature Element */}
        <div className="mt-24 text-center">
          <div className="inline-block px-12 py-6 bg-amber-500/10 border-2 border-amber-500/30 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all">
            <p className="text-2xl text-amber-300 font-serif">
              Taste the Royal Legacy of Nepal & India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
