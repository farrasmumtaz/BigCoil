import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { dreamBetterApi } from "../../services/dreamBetter";

const API_URL = import.meta.env.VITE_API_URL;

export default function DreamBetterList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    dreamBetterApi.getAll().then(setArticles);
  }, []);

  return (
    <section className="bg-[#FAF6EE] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((item) => (
            <Link
              key={item.id}
              to={`/dream-better/${item.slug}`}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2"
            >
              <img
                src={`${API_URL}${item.heroImage}`}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h2
                  className="text-3xl text-[#2A2010]"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  {item.title}
                </h2>

                <p className="mt-4 line-clamp-3 text-[#6D5C45]">
                  {item.description}
                </p>

                <button className="mt-8 rounded-full bg-[#B8935F] px-6 py-3 text-white">
                  Selengkapnya
                </button>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}