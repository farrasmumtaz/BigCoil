import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import heritage from "../../assets/Heritage-cover-300x300.png";
import harmonia from "../../assets/Harmonia-cover-300x300.png";
import havenly from "../../assets/Havenly-cover-300x300.png";
import hospitality from "../../assets/Hospitality.png";

const retailCollections = [
  {
    id: 1,
    eyebrow: "Warisan Kenyamanan",
    title: "Heritage Collection",
    image: heritage,
    link: "/collection/heritage",
    description:
      "Dirancang untuk mereka yang menginginkan lebih dari sekadar tidur nyenyak sebuah sistem tidur yang presisi menopang, mendukung, dan meremajakan tubuh dari kepala hingga kaki.",
    features: [
      {
        title: "5-Zone Nested Pocket Support",
        text: "Setiap zona dirancang mengikuti lekuk alami tubuh Anda, memberikan dukungan lebih kokoh di area yang dibutuhkan (lumbar zone)dan bantalan lebih lembut di area yang diinginkan (bahu & Kaki). Teknologi ini mengurangi titik tekanan dan menjaga tulang belakangtetap sejajar secara sempurna.",
      },
      {
        title: "Mengikuti Bentuk Tubuh, Tetap Responsif",
        text: "Struktur nested coils saling mendukung, membantu kasur mengikuti bentuk tubuh sekaligus terasa lebih firm.",
      },
    ],
  },
  {
    id: 2,
    eyebrow: "Keseimbangan Alami",
    title: "Harmonia Collection",
    image: harmonia,
    link: "/collection/harmonia",
    description:
      "Botaniq Haven menjadi pilihan tepat bagi Anda yang terbiasa tidur telentang (back sleeper) dan membutuhkan penopangan optimal area punggung. Dilengkapiteknologi 3 Zone Nested Pocket Support, kasur ini memberikan penopang lebih optimal dibagian tengah tubuh agar posisi tetap nyaman dan stabil.",
    features: [
      { title: "Fitur utama 1", text: "Setiap pocket spring bekerja secara independen sehingga dapat mengikuti bentuk tubuhdan membantu mengurangi gangguan akibat gerakan. Dengan kombinasi kawat pegas berdiameter 2 mm dan 2,2 mm." },
      { title: "Fitur utama 2", text: "Botaniq Havenmenghadirkan kenyamanan yang seimbang sekaligus topangan yang kuat untuk kualitas tidur yang lebih baik." },
    ],
    spec: null,
  },
  {
    id: 3,
    eyebrow: "Ketenangan Personal",
    title: "Havenly Collection",
    image: havenly,
    link: "/collection/havenly",
    description: "Dunia elegan Havenly Collection dari Cahaya Buana Group menghadirkan harmoni sempurna antara kenyamanan dan performa. Dirancang dengan presisi tinggi serta material berkualitas premium, setiap kasur memberikan dukungan optimal untuk menjaga keselarasan tubuh sekaligus menghadirkan kenyamanan yang memanjakan.",
    features: [
      { title: "Fitur utama 1", text: "Teknologi 3 Zone Pocket Support untuk menjaga posisi tubuh tetap ideal serta sistem foam encased yang membuat sisi kasur lebih kokoh dan stabil, Dream Haven membantu tubuh pulih lebih optimal agar siap kembali produktif keesokan hari." },
      { title: "Fitur utama 2", text: "Dream Haven cocok untuk Anda dengan gaya hidup aktif yang membutuhkan istirahat berkualitas setelah seharian beraktivitas. Dengan tingkat keempukan Medium Plush, kasur ini terasa empuk dan nyaman namun tetap suportif." },
    ],
    spec: null,
  },
];

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
    Firm: "bg-[#B8935F] text-[#2A2010]",
    Soft: "bg-[#F1E8D8] text-[#8A7550]",
    Medium: "bg-[#D8C7A8] text-[#5B4A2C]",
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
      <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#A79E8C]">{spec.label}</p>
    </div>
  );
}

export default function Collection() {
  return (
    <section className="relative overflow-hidden bg-[#15130F] py-28">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');`}</style>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, #D9BD8F 0, transparent 35%), radial-gradient(circle at 85% 90%, #B8935F 0, transparent 35%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-24 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#D9BD8F]">Signature Series</p>
          <h2
            className="text-4xl font-medium text-[#F5F0E6] md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Retail Collection
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
                    <span className="text-xs uppercase tracking-[0.3em] text-[#D9BD8F]">
                      {`0${idx + 1} — ${item.eyebrow}`}
                    </span>
                    <h3
                      className="mb-6 mt-3 text-3xl text-[#F5F0E6] md:text-4xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mb-8 leading-relaxed text-[#B8AF9C]">{item.description}</p>

                    <div className="mb-8 space-y-5">
                      {item.features.map((f, i) => (
                        <div
                          key={i}
                          className={`border-l-2 border-[#3A342A] pl-4 ${reversed ? "md:border-l-0 md:border-r-2 md:pl-0 md:pr-4" : ""
                            }`}
                        >
                          <p className="font-medium text-[#EDE6D8]">{f.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-[#8F866F]">{f.text}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={item.link}
                      className={`group/link inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#F5F0E6] ${reversed ? "flex-row-reverse" : ""
                        }`}
                    >
                      <span className="border-b border-[#F5F0E6]/25 pb-0.5 transition-colors group-hover/link:border-[#D9BD8F] group-hover/link:text-[#D9BD8F]">
                        Jelajahi {item.title}
                      </span>
                      <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>

                  <div className={`relative ${reversed ? "md:order-1" : ""}`}>
                    <Link
                      to={item.link}
                      className="group block overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="block h-auto w-full scale-100 transition duration-[1400ms] ease-out group-hover:scale-[1.05]"
                        />
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    </Link>

                    {item.spec && (
                      <div
                        className={`absolute -bottom-8 w-[85%] max-w-sm rounded-2xl border border-[#B8935F]/30 bg-[#1D1A14]/85 p-5 shadow-2xl backdrop-blur-md ${reversed ? "-left-6 md:-left-10" : "-right-6 md:-right-10"
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


        <Reveal className="mt-40">
          <Reveal className="mb-24 pt-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#D9BD8F]">Signature Series</p>
            <h2
              className="text-4xl font-medium text-[#F5F0E6] md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Hospitality Collection
            </h2>
            <Flourish className="mx-auto mt-5" />
          </Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#211C15] px-6 py-16 md:px-16 md:py-20 ring-1 ring-white/5">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: "radial-gradient(circle at 20% 20%, #D9BD8F 0, transparent 40%)",
              }}
            />
            <div className="relative z-10 grid items-center gap-14 md:grid-cols-2">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#D9BD8F]">
                  For Hospitality Partners
                </p>
                <h2
                  className="mb-6 text-4xl text-[#F5F0E6] md:text-5xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Hospitality Collection
                </h2>
                <p className="mb-8 leading-relaxed text-[#B8AF9C]">
                  Big Koil menghadirkan <em className="text-[#F5F0E6]">Hospitality Collection</em>,
                  lini produk kasur premium yang dirancang khusus untuk memberikan kenyamanan
                  tidur kelas hotel berbintang. Mengusung desain elegan dan material berkualitas
                  tinggi, koleksi ini menargetkan segmen hotel, apartemen, dan hunian eksklusif
                  yang mengutamakan kenyamanan, daya tahan, serta nilai estetika.
                </p>
                <Link
                  to="/collection/hospitality"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#D9BD8F]/40 px-6 py-3 text-sm tracking-wide text-[#D9BD8F] transition-colors hover:bg-[#D9BD8F] hover:text-[#211C15]"
                >
                  Explore Hospitality
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              <div className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src={hospitality}
                  alt="Hospitality Collection"
                  className="block h-auto w-full transition duration-[1400ms] ease-out group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}