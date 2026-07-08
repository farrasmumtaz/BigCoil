import { useEffect, useState } from "react";

import { heroApi } from "../../services/hero";

const BASE_URL = "http://localhost:3000";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <section className="flex h-screen items-center justify-center">
        Loading...
      </section>
    );
  }

  if (!hero) {
    return (
      <section className="flex h-screen items-center justify-center">
        Hero not found.
      </section>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src={`${BASE_URL}${hero.image}`}
        alt={hero.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          px-8
        "
      >
        <div className="max-w-2xl text-white">
          <p className="mb-3 tracking-[6px] uppercase text-[#E6B980] font-['Cambria', serif]">
            Premium Sleep System
          </p>

          <h1 className="mb-6 text-6xl font-bold leading-tight font-['Cambria', serif]">
            {hero.title}
            {hero.subtitle && (
              <>
                <br />
                {hero.subtitle}
              </>
            )}
          </h1>

          <p className="mb-10 text-lg text-stone-200 font-['Cambria', serif]">
            {hero.description}
          </p>

          <a
            href={hero.buttonLink}
            className="inline-block rounded bg-[#C89D63] px-8 py-3 font-semibold text-white transition hover:bg-[#B98A4B] font-['Cambria', serif]"
          >
            {hero.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}