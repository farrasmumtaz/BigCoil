"use client";

import { useEffect, useState } from "react";

import { warrantyApi } from "../../services/warranty";

export default function Warranty() {
  const [warranty, setWarranty] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWarranty = async () => {
    try {
      const data = await warrantyApi.get();

      setWarranty(Array.isArray(data) ? data[0] : data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchWarranty();
  }, []);

  if (loading) {
    return (
      <section className="py-32 text-center">
        Loading...
      </section>
    );
  }

  if (!warranty) return null;

  return (
    <section className="bg-[url('/images/background-pattern.png')] bg-cover bg-center">

      {/* Hero */}
      <div className="relative h-[500px] overflow-hidden">

        <img
          src={`${import.meta.env.VITE_API_URL}${warranty.heroImage}`}
          alt={warranty.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center text-5xl font-bold text-white md:text-7xl">
            {warranty.title}
          </h1>
        </div>

      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="text-lg leading-9 text-gray-700 whitespace-pre-line">
            {warranty.description}
          </p>
        </div>

        <div className="space-y-16">

          {warranty.items?.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >

              <div className="p-10">

                <h2 className="mb-6 text-4xl font-bold">
                  {item.title}
                </h2>

                {item.description && (
                  <p className="leading-9 text-gray-600 whitespace-pre-line">
                    {item.description}
                  </p>
                )}

              </div>

              {item.image && (
                <div className="border-t">

                  <img
                    src={`${import.meta.env.VITE_API_URL}${item.image}`}
                    alt={item.title}
                    className="w-full object-cover"
                  />

                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}