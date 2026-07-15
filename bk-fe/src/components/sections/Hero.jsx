import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { heroApi } from "../../services/hero";

const BASE_URL = "http://localhost:3000";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await heroApi.getAll();

        if (data.length > 0) {
          setHero(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch hero:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  // Trigger the entrance sequence once content is ready (above the fold, so
  // this fires on mount rather than on scroll like the rest of the page).
  useEffect(() => {
    if (!loading) {
      const frame = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [loading]);

  if (loading) {
    return (
      <section className="flex h-screen items-center justify-center bg-[#15130F] text-xs uppercase tracking-[0.4em] text-[#D9BD8F]">
        Memuat...
      </section>
    );
  }

  if (!hero) {
    return (
      <section className="flex h-screen items-center justify-center bg-[#15130F] text-xs uppercase tracking-[0.4em] text-[#D9BD8F]">
        Hero belum tersedia.
      </section>
    );
  }

  const enterClass = `transition-all duration-[900ms] ease-out ${
    entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;
  const stagger = (index) => ({ transitionDelay: `${200 + index * 140}ms` });

  return (
    <section className="relative h-screen overflow-hidden bg-[#15130F]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap');`}</style>

      <img
        src={`${BASE_URL}${hero.image}`}
        alt={hero.title}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out ${
          entered ? "scale-100" : "scale-110"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#15130F] via-[#15130F]/30 to-[#15130F]/10" />
      <div className="absolute inset-0 bg-[#15130F]/25" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl">
          <p
            className={`mb-4 text-xs uppercase tracking-[0.5em] text-[#E6B980] ${enterClass}`}
            style={stagger(0)}
          >
            Premium Sleep System
          </p>

          <h1
            className={`text-5xl uppercase leading-[0.95] tracking-[0.01em] text-white sm:text-6xl md:text-7xl ${enterClass}`}
            style={{ fontFamily: "'Cormorant Garamond', serif", ...stagger(1) }}
          >
            {hero.title}
            {hero.subtitle && (
              <>
                <br />
                {hero.subtitle}
              </>
            )}
          </h1>

          {hero.description && (
            <p
              className={`mt-8 max-w-xl text-base leading-relaxed text-stone-200/80 ${enterClass}`}
              style={stagger(2)}
            >
              {hero.description}
            </p>
          )}

          <div className={`mt-10 flex flex-wrap items-center gap-8 ${enterClass}`} style={stagger(3)}>
            {hero.buttonLink && hero.buttonText && (
              <a
                href={hero.buttonLink}
                className="group inline-flex items-center gap-3 bg-[#B8935F] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#8A6A2E]"
              >
                {hero.buttonText}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            )}

            <Link
              to="/technology"
              className="group inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-[#D9BD8F]"
            >
              <span className="border-b border-white/30 pb-0.5">Jelajahi Teknologi</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className={`absolute bottom-10 left-6 z-10 flex items-center gap-3 transition-opacity duration-[1200ms] lg:left-8 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="relative block h-10 w-px overflow-hidden bg-white/25">
          <span className="absolute inset-x-0 top-0 h-4 w-px animate-[scrollcue_1.8s_ease-in-out_infinite] bg-[#B8935F]" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">Scroll</span>
      </div>

      <style>{`
        @keyframes scrollcue {
          0% { transform: translateY(-16px); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(40px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}