import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { collectionApi } from "../../services/collection";
import { collectionDetailApi } from "../../services/collectionDetail";
import { productApi } from "../../services/product";

const API_URL = import.meta.env.VITE_API_URL;

function Flourish({ className = "" }) {
  return (
    <svg
      width="120"
      height="16"
      viewBox="0 0 120 16"
      className={className}
      fill="none"
    >
      <line x1="0" y1="8" x2="46" y2="8" stroke="#B8935F" strokeWidth="1" />
      <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#B8935F" />
      <line x1="74" y1="8" x2="120" y2="8" stroke="#B8935F" strokeWidth="1" />
    </svg>
  );
}

export default function CollectionDetail() {
  const { categorySlug, collectionSlug } = useParams();

  const [collection, setCollection] = useState(null);
  const [detail, setDetail] = useState(null);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionData = await collectionApi.getBySlug(collectionSlug);

        setCollection(collectionData);

        const detailData =
          await collectionDetailApi.getByCollection(collectionData.id);

        setDetail(detailData);

        const productsData = await productApi.getByCollection(
          collectionData.id
        );

        setProducts(productsData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionSlug]);

  if (loading) {
    return (
      <section className="py-40 text-center text-lg text-[#8A7550]">
        Loading...
      </section>
    );
  }

  if (!collection) {
    return (
      <section className="py-40 text-center text-lg">
        Collection not found.
      </section>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}

      {detail && (
        <section className="relative h-screen overflow-hidden">
          <img
            src={`${API_URL}${detail.heroImage}`}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative flex h-full items-center justify-center px-6">
            <div className="text-center text-white">
              <h1
                className="text-5xl md:text-7xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {detail.heroTitle}
              </h1>
            </div>
          </div>
        </section>
      )}

      {/* ================= DESCRIPTION ================= */}

      <section className="bg-[#FAF6EE] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2
            className="text-5xl text-[#2A2010]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {collection.title}
          </h2>

          <Flourish className="mx-auto mt-6" />

          <p className="mt-8 text-lg leading-9 text-[#6D5C45]">
            {detail?.heroDescription}
          </p>
        </div>
      </section>

      {/* ================= PRODUCT ================= */}

      <section className="bg-[#FAF6EE] pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/collection/${categorySlug}/${collectionSlug}/${product.slug}`}
                className="group"
              >
                <div className="overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_-25px_rgba(42,32,16,0.25)] transition duration-300 group-hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <img
                      src={`${API_URL}${product.heroImage}`}
                      alt={product.title}
                      className="aspect-3/4 w-full object-cover duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <h3
                      className="text-3xl text-[#2A2010]"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {product.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 leading-7 text-[#6D5C45]">
                      {product.shortDescription}
                    </p>

                    <button className="mt-8 rounded-full bg-[#B8935F] px-8 py-3 text-sm tracking-widest text-white transition hover:bg-[#9D7A46]">
                      EXPLORE PRODUCT
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}