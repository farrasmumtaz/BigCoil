import { useEffect, useState } from "react";

import { aboutCompanyApi } from "../../services/aboutCompany";
import { aboutBrandApi } from "../../services/aboutBrand";

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

export default function About() {
  const [company, setCompany] = useState(null);
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyData = await aboutCompanyApi.getAll();
        const brandData = await aboutBrandApi.getAll();

        setCompany(companyData[0]);
        setBrand(brandData[0]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (!company || !brand) {
    return (
      <div className="py-40 text-center text-[#8A7550]">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#FAF6EE]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');`}</style>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, #B8935F 0, transparent 35%), radial-gradient(circle at 85% 90%, #D9BD8F 0, transparent 35%)",
        }}
      />

      {/* ================= COMPANY ================= */}

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#B8935F]">
            Tentang Kami
          </p>
          <h2
            className="text-4xl font-medium text-[#2A2010] md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {company.title}
          </h2>
          <Flourish className="mx-auto mt-5 mb-6" />
          <p className="mx-auto max-w-2xl text-sm uppercase tracking-[0.2em] text-[#8A7550]">
            {company.subtitle}
          </p>
        </div>

        {/* Gambar full-width, tidak dikurung grid sejajar */}
        <div className="group relative mx-auto mb-16 max-w-5xl overflow-hidden rounded-2xl shadow-[0_40px_100px_-30px_rgba(42,32,16,0.3)] ring-1 ring-black/5">
          <img
            src={`${API_URL}${company.image}`}
            alt={company.title}
            className="block h-auto w-full transition duration-1400 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Deskripsi di bawah gambar, center dengan max-width untuk keterbacaan */}
        <p className="mx-auto max-w-4xl text-center leading-9 text-[#6B5F4A] whitespace-pre-line">
          {company.description}
        </p>
      </div>

      {/* Divider antar section */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B8935F]/30 to-transparent" />
      </div>

      {/* ================= BRAND ================= */}

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#B8935F]">
              Our Brand
            </p>
            <h2
              className="mb-8 text-4xl font-medium text-[#2A2010] md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {brand.title}
            </h2>

            <p className="text-justify leading-9 text-[#6B5F4A] whitespace-pre-line">
              {brand.description}
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-[0_40px_100px_-30px_rgba(42,32,16,0.3)] ring-1 ring-black/5">
            <img
              src={`${API_URL}${brand.image}`}
              alt={brand.title}
              className="block h-auto w-full transition duration-1400 ease-out group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
          </div>
        </div>
      </div>
    </section>
  );
}