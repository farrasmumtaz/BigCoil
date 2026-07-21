import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { dreamBetterApi } from "../../services/dreamBetter";
import Article from "./Article";

const API_URL = import.meta.env.VITE_API_URL;
const AUTOPLAY_DELAY = 6000;

function Flourish({ className = "" }) {
  return (
    <svg width="120" height="16" viewBox="0 0 120 16" className={className} fill="none">
      <line x1="0" y1="8" x2="46" y2="8" stroke="#D9BD8F" strokeWidth="1" />
      <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#D9BD8F" />
      <line x1="74" y1="8" x2="120" y2="8" stroke="#D9BD8F" strokeWidth="1" />
    </svg>
  );
}

export default function DreamBetterList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    dreamBetterApi
      .getAll()
      .then(setArticles)
      .finally(() => setLoading(false));
  }, []);

  const count = articles.length;

  const goTo = (index) => {
    if (!count) return;
    setCurrent(((index % count) + count) % count);
  };
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Autoplay — paused while the user's mouse is over the slider.
  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % count);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [paused, count]);

  if (loading) {
    return (
      <section className="flex h-screen items-center justify-center bg-[#FAF6EE] text-[#8A7550]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#B8935F] border-t-transparent" />
          <p className="text-xs uppercase tracking-[0.3em]">Memuat...</p>
        </div>
      </section>
    );
  }

  if (!count) return null;

  return (
    <section className="bg-[#FAF6EE]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');`}</style>

      <div
        className="relative h-screen min-h-[560px] w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* slides track */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {articles.map((item) => (
            <div key={item.id} className="relative h-full w-full shrink-0">
              <img
                src={`${API_URL}${item.heroImage}`}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />

              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

                <h1
                  className="max-w-3xl text-5xl font-medium text-white md:text-7xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h1>

                <Flourish className="mt-8" />

                <p className="mt-8 max-w-xl leading-8 text-white/85">
                  {item.description}
                </p>

                <Link
                  to={`/dream-better/${item.slug}`}
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white/95 px-9 py-4 text-sm font-medium uppercase tracking-[0.15em] text-[#2A2010] transition hover:bg-[#B8935F] hover:text-white"
                >
                  Selengkapnya
                  <ChevronRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* index counter, top-left — echoes the numbered clauses on the Warranty page */}
        <div
          className="absolute left-6 top-8 z-10 text-white/80 md:left-10 md:top-10"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span className="text-2xl">{String(current + 1).padStart(2, "0")}</span>
          <span className="mx-1 text-sm text-white/50">/</span>
          <span className="text-sm text-white/50">{String(count).padStart(2, "0")}</span>
        </div>

        {/* prev / next arrows */}
        {count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Sebelumnya"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 p-2.5 text-white/90 transition hover:border-white hover:bg-white/10 md:left-8 md:p-3"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              aria-label="Selanjutnya"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 p-2.5 text-white/90 transition hover:border-white hover:bg-white/10 md:right-8 md:p-3"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
        {count > 1 && (
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-10">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Ke slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${index === current ? "w-8 bg-[#D9BD8F]" : "w-1.5 bg-white/50"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
      <Article />
    </section>
  );
}