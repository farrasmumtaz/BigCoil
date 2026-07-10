import { useEffect, useState } from "react";

import { technologyApi } from "../../services/technology";

const API_URL = import.meta.env.VITE_API_URL;

function Flourish({ className = "" }) {
  return (
    <svg width="120" height="16" viewBox="0 0 120 16" className={className} fill="none">
      <line x1="0" y1="8" x2="46" y2="8" stroke="#B8935F" strokeWidth="1" />
      <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#B8935F" />
      <line x1="74" y1="8" x2="120" y2="8" stroke="#B8935F" strokeWidth="1" />
    </svg>
  );
}

function TechGroup({ eyebrow, title, items }) {
  return (
    <div>
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#B8935F]">
          {eyebrow}
        </p>
        <h3
          className="text-3xl font-medium text-[#2A2010] md:text-4xl"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </h3>
        <Flourish className="mx-auto mt-5" />
      </div>

      <div className="flex flex-col gap-24">
        {items.map((item, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div
              key={item.id}
              className="grid items-center gap-14 lg:grid-cols-2"
            >
              <div className={reversed ? "lg:order-2" : ""}>
                <div className="group relative overflow-hidden rounded-3xl shadow-[0_40px_100px_-30px_rgba(42,32,16,0.3)] ring-1 ring-black/5">
                  <img
                    src={`${API_URL}${item.image}`}
                    alt={item.title}
                    className="block h-auto w-full transition duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                </div>
              </div>

              <div className={reversed ? "lg:order-1" : ""}>
                <h4
                  className="text-3xl text-[#2A2010] md:text-4xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h4>

                {item.subtitle && (
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#B8935F]">
                    {item.subtitle}
                  </p>
                )}

                <p className="mt-6 whitespace-pre-line leading-9 text-[#6B5F4A]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Technology() {
  const [coil, setCoil] = useState([]);
  const [foam, setFoam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnology = async () => {
      try {
        const [coilData, foamData] = await Promise.all([
          technologyApi.getCoil(),
          technologyApi.getFoam(),
        ]);

        setCoil(coilData);
        setFoam(foamData);
      } catch (error) {
        console.error("Failed to fetch technology", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnology();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#FAF6EE] py-24 text-center text-[#8A7550]">
        Loading...
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
        <div className="mb-24 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#B8935F]">
            Signature Innovation
          </p>
          <h2
            className="text-4xl font-medium text-[#2A2010] md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Technology
          </h2>
          <Flourish className="mx-auto mt-5" />
        </div>

        {/* ================= COIL ================= */}
        <div className="mb-32">
          <TechGroup
            eyebrow="Precision Support"
            title="Pocket Coil Technology"
            items={coil}
          />
        </div>

        {/* Divider */}
        <div className="mb-32 h-px w-full bg-gradient-to-r from-transparent via-[#B8935F]/30 to-transparent" />

        {/* ================= FOAM ================= */}
        <TechGroup
          eyebrow="Layered Comfort"
          title="Foam Technology"
          items={foam}
        />
      </div>
    </section>
  );
}