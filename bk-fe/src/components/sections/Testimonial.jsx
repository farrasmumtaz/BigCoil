import { useEffect, useRef, useState } from "react";

import { testimonialApi } from "../../services/testimonial";

const BASE_URL = import.meta.env.VITE_API_URL;

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Flourish({ className = "" }) {
  return (
    <svg width="120" height="16" viewBox="0 0 120 16" className={className} fill="none">
      <line x1="0" y1="8" x2="46" y2="8" stroke="#B8935F" strokeWidth="1" />
      <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#B8935F" />
      <line x1="74" y1="8" x2="120" y2="8" stroke="#B8935F" strokeWidth="1" />
    </svg>
  );
}

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await testimonialApi.getAll();
        setTestimonials(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-[#FAF6EE] py-24 lg:py-32">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap');`}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="text-center">
          <h2
            className="mt-3 text-4xl uppercase leading-[0.95] text-[#2A2010] md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Testimonial
          </h2>
          <Flourish className="mx-auto mt-5" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 90}>
              <div className="group overflow-hidden border border-[#2A2010]/10">
                <img
                  src={`${BASE_URL}${item.image}`}
                  alt={`testimonial-${item.id}`}
                  className="aspect-[4/5] w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.05]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}