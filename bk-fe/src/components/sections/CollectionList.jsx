import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { collectionApi } from "../../services/collection";

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

export default function CollectionList() {
  const location = useLocation();

  const isHospitality = location.pathname.includes("hospitality");

  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = isHospitality
          ? await collectionApi.getHospitality()
          : await collectionApi.getRetail();

        setCollections(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, [isHospitality]);

  if (loading) {
    return (
      <section className="bg-[#FAF6EE] py-32 text-center text-[#8A7550]">
        Loading...
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAF6EE] py-28">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');`}</style>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, #B8935F 0, transparent 35%), radial-gradient(circle at 85% 90%, #D9BD8F 0, transparent 35%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 text-center">
          <h1
            className="text-4xl font-medium text-[#2A2010] md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {isHospitality ? "HOSPITALITY COLLECTION" : "RETAIL COLLECTION"}
          </h1>
          <Flourish className="mx-auto mt-5" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((item) => (
            <Link
              key={item.id}
              to={`/collection/${item.category.slug}/${item.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-25px_rgba(42,32,16,0.25)] ring-1 ring-black/5 transition duration-300 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={`${API_URL}${item.coverImage}`}
                    alt={item.title}
                    className="aspect-3/4 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                </div>

                <div className="p-6">
                  <h2
                    className="text-center text-2xl text-[#2A2010]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}