import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { collectionApi } from "../../services/collection";

const API_URL = "http://localhost:3000";

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
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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

function SpecCard({ spec }) {
  const zoneColor = {
    Firm: "bg-[#B8935F] text-[#FAF6EE]",
    Soft: "bg-[#F1E8D8] text-[#8A7550]",
    Medium: "bg-[#E4D4B0] text-[#5B4A2C]",
  };

  return (
    <div>
      <div className="flex h-9 w-full overflow-hidden rounded-full ring-1 ring-[#B8935F]/40">
        {spec.zones.map((z, i) => (
          <div
            key={i}
            style={{ flexGrow: z.grow }}
            className={`flex items-center justify-center text-[9px] font-medium tracking-wide ${zoneColor[z.label]}`}
          >
            {z.label}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#A08D63]">{spec.label}</p>
    </div>
  );
}

// Mapping response API -> shape yang dipakai UI
function mapCollection(item) {
  const detail = item.detail || {};

  return {
    id: item.id,
    eyebrow: detail.eyebrow || item.category?.name || "",
    title: item.title,
    image: item.coverImage?.startsWith("http")
      ? item.coverImage
      : `${API_URL}${item.coverImage}`,
    link: `/collection/${item.slug}`,
    description: item.description,
    features: detail.features || [],
    spec: detail.spec || null,
  };
}

export default function Collection() {
  const [retailCollections, setRetailCollections] = useState([]);
  const [hospitalityCollections, setHospitalityCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [retailData, hospitalityData] = await Promise.all([
          collectionApi.getRetail(),
          collectionApi.getHospitality(),
        ]);

        setRetailCollections(retailData.map(mapCollection));

        setHospitalityCollections(
          hospitalityData.map(mapCollection)
        );
      } catch (err) {
        console.error(err);
        setError("Gagal memuat data koleksi.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#FAF6EE] py-28 text-center text-[#8A7550]">
        Memuat koleksi...
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#FAF6EE] py-28 text-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#FAF6EE] py-28">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');`}</style>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, #B8935F 0, transparent 35%), radial-gradient(circle at 85% 90%, #D9BD8F 0, transparent 35%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-24 text-center">
          <h2
            className="text-4xl font-medium text-[#2A2010] md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            RETAIL COLLECTION
          </h2>
          <Flourish className="mx-auto mt-5" />
        </Reveal>

        <div className="flex flex-col gap-32">
          {retailCollections.map((item, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <Reveal key={item.id} delay={idx * 80}>
                <article className="grid items-center gap-14 md:grid-cols-2">
                  <div
                    className={`relative z-10 px-2 md:px-8 ${reversed ? "md:order-2 md:text-right" : ""}`}
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-[#B8935F]">
                      {`0${idx + 1} — ${item.eyebrow}`}
                    </span>
                    <h3
                      className="mb-6 mt-3 text-3xl text-[#2A2010] md:text-4xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mb-8 leading-relaxed text-[#6B5F4A]">{item.description}</p>

                    {item.features.length > 0 && (
                      <div className="mb-8 space-y-5">
                        {item.features.map((f, i) => (
                          <div
                            key={i}
                            className={`border-l-2 border-[#E4D9C2] pl-4 ${reversed ? "md:border-l-0 md:border-r-2 md:pl-0 md:pr-4" : ""
                              }`}
                          >
                            <p className="font-medium text-[#3A3020]">{f.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-[#8F826A]">{f.text}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      to={item.link}
                      className={`group/link inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#2A2010] ${reversed ? "flex-row-reverse" : ""
                        }`}
                    >
                      <span className="border-b border-[#2A2010]/25 pb-0.5 transition-colors group-hover/link:border-[#B8935F] group-hover/link:text-[#B8935F]">
                        Jelajahi {item.title}
                      </span>
                      <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>

                  <div className={`relative ${reversed ? "md:order-1" : ""}`}>
                    <Link
                      to={item.link}
                      className="group block overflow-hidden rounded-4x1 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.2)] ring-1 ring-black/5"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="block h-auto w-full scale-100 transition duration-1400 ease-out group-hover:scale-[1.05]"
                        />
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                      </div>
                    </Link>

                    {item.spec && (
                      <div
                        className={`absolute -bottom-8 w-[85%] max-w-sm rounded-2xl border border-[#B8935F]/30 bg-white/90 p-5 shadow-2xl backdrop-blur-md ${reversed ? "-left-6 md:-left-10" : "-right-6 md:-right-10"
                          }`}
                      >
                        <SpecCard spec={item.spec} />
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {hospitalityCollections.length > 0 && (
  <Reveal className="mt-40">
    <Reveal className="mb-16 text-center">
      <h2
        className="text-4xl font-medium text-[#2A2010] md:text-5xl"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        HOSPITALITY COLLECTION
      </h2>
      <Flourish className="mx-auto mt-5 mb-8" />
      <p className="mx-auto max-w-3xl leading-relaxed text-[#6B5F4A]">
        {/* deskripsi section */}
      </p>
      <div className="mt-8">
        <Link
          to="/collection/hospitality"
          className="group inline-flex items-center gap-2 rounded-full border border-[#B8935F]/50 px-6 py-3 text-sm tracking-wide text-[#8A6A2E] transition-colors hover:bg-[#B8935F] hover:text-white"
        >
          Explore Hospitality
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Reveal>

    <div className="mx-auto flex max-w-6xl flex-col gap-12">
      {hospitalityCollections.map((item, i) => (
        <Reveal key={item.id} delay={150 + i * 100}>
          <Link
            to={item.link}
            className="group relative block overflow-hidden rounded-3xl shadow-[0_40px_100px_-30px_rgba(42,32,16,0.35)] ring-1 ring-black/5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-3xl"
            />

            <div className="p-6">
              <h3 className="text-3xl">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>

            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
          </Link>
        </Reveal>
      ))}
    </div>
  </Reveal>
)}
      </div>
    </section>
  );
}