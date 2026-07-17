import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { collectionApi } from "../../services/collection";

const API_URL = "http://192.168.80.9:3000";

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

function zoneColor(label) {
  return (
    {
      Firm: "bg-[#B8935F]",
      Soft: "bg-[#F1E8D8]",
      Medium: "bg-[#D9BD8F]",
    }[label] || "bg-[#D9BD8F]"
  );
}

/**
 * One full-screen stage (Retail / Hospitality). If it has more than one
 * item, navigation between items is deliberate only — arrow buttons, the
 * dot indicators, or a touch swipe. Normal vertical scrolling is left
 * completely alone so it never fights with the carousel.
 */
function CarouselStage({ eyebrowLabel, items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);

  const goNext = () => setActiveIndex((i) => Math.min(i + 1, items.length - 1));
  const goPrev = () => setActiveIndex((i) => Math.max(i - 1, 0));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -50) goNext();
    if (delta > 50) goPrev();
    touchStartX.current = null;
  };

  if (items.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full snap-start overflow-hidden bg-[#15130F]"
      style={{ scrollSnapStop: "always" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{
          width: `${items.length * 100}%`,
          transform: `translateX(-${(activeIndex * 100) / items.length}%)`,
        }}
      >
        {items.map((item, idx) => (
          <div key={item.id} className="relative h-full shrink-0" style={{ width: `${100 / items.length}%` }}>
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#15130F]/85 via-[#15130F]/45 to-transparent" />

            <div className="relative z-10 flex h-full items-center px-6 lg:px-16">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-[0.5em] text-[#E6B980]">
                  {`${item.eyebrow || eyebrowLabel} 0${idx + 1}`}
                </span>

                <h2
                  className="mt-4 text-5xl uppercase leading-[0.95] text-white md:text-6xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h2>

                <p className="mt-6 max-w-md leading-relaxed text-white/75">{item.description}</p>

                {item.features.slice(0, 2).map((f, i) => (
                  <div key={i} className="mt-5 border-l-2 border-[#B8935F]/40 pl-4">
                    <p className="font-medium text-[#D9BD8F]">{f.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{f.text}</p>
                  </div>
                ))}

                {item.spec && (
                  <div className="mt-6 max-w-xs">
                    <div className="flex h-2 w-full overflow-hidden rounded-full">
                      {item.spec.zones.map((z, i) => (
                        <span key={i} style={{ flexGrow: z.grow }} className={zoneColor(z.label)} />
                      ))}
                    </div>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/50">
                      {item.spec.label}
                    </p>
                  </div>
                )}

                <Link
                  to={item.link}
                  className="group mt-8 inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.25em] text-white"
                >
                  <span className="border-b border-white/30 pb-0.5 transition-colors group-hover:border-[#B8935F] group-hover:text-[#D9BD8F]">
                    Jelajahi {item.title}
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 border border-white/20 p-3 text-white transition-colors hover:border-[#B8935F] hover:text-[#B8935F] disabled:pointer-events-none disabled:opacity-20 lg:left-8"
          >
            ←
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={activeIndex === items.length - 1}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 border border-white/20 p-3 text-white transition-colors hover:border-[#B8935F] hover:text-[#B8935F] disabled:pointer-events-none disabled:opacity-20 lg:right-8"
          >
            →
          </button>

          <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 transition-all ${
                  idx === activeIndex ? "w-8 bg-[#B8935F]" : "w-4 bg-white/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
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
        setHospitalityCollections(hospitalityData.map(mapCollection));
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
      <section className="flex h-screen items-center justify-center bg-[#15130F] text-xs uppercase tracking-[0.4em] text-[#D9BD8F]">
        Memuat koleksi...
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex h-screen items-center justify-center bg-[#15130F] text-red-400">
        {error}
      </section>
    );
  }

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');`}</style>

      <CarouselStage eyebrowLabel="Retail Collection" items={retailCollections} />
      <CarouselStage eyebrowLabel="Hospitality Collection" items={hospitalityCollections} />
    </>
  );
}