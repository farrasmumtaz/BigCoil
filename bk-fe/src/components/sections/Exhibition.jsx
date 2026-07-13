import { useEffect, useState } from "react";

import { exhibitionApi } from "../../services/exhibition";
import ExhibitionCard from "./ExhibitionCard";

function Flourish() {
  return (
    <svg width="120" height="16" viewBox="0 0 120 16">
      <line x1="0" y1="8" x2="46" y2="8" stroke="#B8935F" />
      <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#B8935F" />
      <line x1="74" y1="8" x2="120" y2="8" stroke="#B8935F" />
    </svg>
  );
}

export default function Exhibition() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    exhibitionApi
      .getAll()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-32 text-center">
        Loading...
      </section>
    );
  }

  return (
    <section className="bg-[#FAF6EE] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <h1
            className="text-6xl text-[#2A2010]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            PAMERAN BIGKOIL
          </h1>

          <div className="mt-5 flex justify-center">
            <Flourish />
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-[#6D5C45]">
            Temukan berbagai pameran yang telah diikuti BigKoil di berbagai kota.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {data.map((item) => (
            <ExhibitionCard
              key={item.id}
              exhibition={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}