import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { dreamBetterApi } from "../../services/dreamBetter";

const API_URL = import.meta.env.VITE_API_URL;

export default function DreamBetterDetail() {
    const { slug } = useParams();

    const [article, setArticle] = useState(null);

    useEffect(() => {
        console.log("slug =", slug);

        dreamBetterApi
            .getBySlug(slug)
            .then((data) => {
                console.log("response =", data);
                setArticle(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [slug]);

    if (!article) {
        return (
            <section className="py-32 text-center">
                Loading...
            </section>
        );
    }

    return (
  <>
    {/* HERO */}
    <section className="relative h-screen min-h-[800px] overflow-hidden">

  <img
    src={`${API_URL}${article.heroImage}`}
    alt={article.title}
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

  {/* Content */}
  <div className="absolute inset-0 flex items-center">

    <div className="mx-auto w-full max-w-7xl px-8">

      <div className="max-w-3xl">

        <span className="inline-flex rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-medium tracking-[0.35em] text-white uppercase backdrop-blur-md">
          Dream Better
        </span>

        <h1
          className="mt-8 text-6xl leading-none text-white md:text-8xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {article.title}
        </h1>

        <div className="mt-8 h-[2px] w-24 rounded-full bg-[#B8935F]" />
      </div>
    </div>

  </div>

    </section>

    {/* CONTENT */}
    <section className="bg-[#FAF6EE] py-28">

      <div className="mx-auto max-w-4xl px-6">

        {article.sections.map((section, index) => (
          <div
            key={section.id}
            className="mb-24 border-b border-[#E6D9C4] pb-20 last:mb-0 last:border-none last:pb-0"
          >
            {/* Number */}
            <span className="text-sm font-semibold tracking-[0.4em] text-[#B8935F]">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Title */}
            <h2
              className="mt-3 text-4xl text-[#2A2010] md:text-5xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {section.title}
            </h2>

            {/* Decorative Line */}
            <div className="mt-6 mb-10 h-[2px] w-20 rounded-full bg-[#B8935F]" />

            {/* Paragraph */}
            <div className="space-y-8">
              {section.content
                .split("\n\n")
                .map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg leading-10 text-[#5C5243]"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        ))}

      </div>

    </section>
  </>
);
}