import { ChevronDown } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

function Flourish({ className = "" }) {
  return (
    <svg width="120" height="16" viewBox="0 0 120 16" className={className} fill="none">
      <line x1="0" y1="8" x2="46" y2="8" stroke="#D9BD8F" strokeWidth="1" />
      <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#D9BD8F" />
      <line x1="74" y1="8" x2="120" y2="8" stroke="#D9BD8F" strokeWidth="1" />
    </svg>
  );
}

export default function ProductHero({ product }) {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src={`${API_URL}${product.heroImage}`}
        alt={product.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center px-6 pt-36 text-center text-white md:pt-44">

        <h1
          className="max-w-4xl text-6xl italic leading-[1.05] md:text-8xl"
          style={{ fontFamily: "Cambria, serif" }}
        >
          {product.title}
        </h1>

        <Flourish className="mt-7" />

        {product.shortDescription && (
          <p className="mt-7 max-w-xl text-sm font-medium uppercase tracking-[0.35em] text-white/80">
            {product.shortDescription}
          </p>
        )}
      </div>

      <button
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        aria-label="Gulir ke bawah"
        className="group absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 transition hover:text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Jelajahi</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}