import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import { exhibitionApi } from "../../services/exhibition";
import ExhibitionCard from "./ExhibitionCard";

const API_URL = import.meta.env.VITE_API_URL;

function Flourish() {
  return (
    <svg width="120" height="16" viewBox="0 0 120 16">
      <line x1="0" y1="8" x2="46" y2="8" stroke="#B8935F" />
      <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#B8935F" />
      <line x1="74" y1="8" x2="120" y2="8" stroke="#B8935F" />
    </svg>
  );
}

function ExhibitionModal({ exhibition, loading, onClose }) {
  useEffect(() => {
    if (!exhibition && !loading) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Mencegah halaman belakang ikut scroll saat modal terbuka.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [exhibition, loading, onClose]);

  if (!exhibition && !loading) return null;

  const coverImageUrl = exhibition?.coverImage
    ? exhibition.coverImage.startsWith("http")
      ? exhibition.coverImage
      : `${API_URL}${exhibition.coverImage}`
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Detail pameran"
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail pameran"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-[#2A2010] shadow-md transition hover:bg-[#FAF6EE]"
        >
          ×
        </button>

        {loading ? (
          <div className="flex min-h-[420px] items-center justify-center">
            <p className="text-[#6D5C45]">Memuat detail pameran...</p>
          </div>
        ) : (
          <>
            {coverImageUrl && (
              <div className="h-64 overflow-hidden md:h-96">
                <img
                  src={coverImageUrl}
                  alt={exhibition.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="grid gap-10 p-7 md:grid-cols-[1fr_280px] md:p-10">
              <div>
                <p className="font-semibold text-[#B8935F]">
                  {new Date(exhibition.eventDate).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <h2
                  className="mt-3 text-4xl leading-tight text-[#2A2010] md:text-5xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {exhibition.title}
                </h2>

                {exhibition.location && (
                  <div className="mt-5 flex items-start gap-2 text-[#6D5C45]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 shrink-0"
                    >
                      <path
                        d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle
                        cx="12"
                        cy="9"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>

                    <p className="text-lg font-medium">
                      {exhibition.location}
                    </p>
                  </div>
                )}

                <p className="mt-8 whitespace-pre-line leading-8 text-[#6D5C45]">
                  {exhibition.description}
                </p>

                {exhibition.mapsUrl && (
                  <a
                    href={exhibition.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2A2010] px-7 py-3 font-semibold text-white transition hover:opacity-90"
                  >
                    Buka Lokasi di Google Maps

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14 5h5v5M19 5l-8 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                )}
              </div>

              {exhibition.mapsUrl && (
                <aside className="self-start rounded-2xl border border-[#E8D9C2] bg-[#FAF6EE] p-5 text-center">
                  <h3 className="text-xl font-semibold text-[#2A2010]">
                    Scan Lokasi Pameran
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6D5C45]">
                    Arahkan kamera ponsel ke QR code.
                  </p>

                  <div className="mx-auto mt-5 flex h-56 w-56 max-w-full items-center justify-center rounded-xl bg-white p-4">
                    <QRCodeSVG
                      value={exhibition.mapsUrl}
                      size={190}
                      level="H"
                      includeMargin
                      title={`QR code lokasi ${exhibition.title}`}
                    />
                  </div>
                </aside>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Exhibition() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");

  useEffect(() => {
    exhibitionApi
      .getAll()
      .then(setData)
      .catch(() => {
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const openDetail = async (exhibition) => {
    setSelectedExhibition(exhibition);
    setDetailLoading(true);
    setDetailError("");

    try {
      /*
       * Tetap mengambil detail berdasarkan slug agar data description,
       * mapsUrl, dan field lainnya dipastikan lengkap.
       */
      const detail = await exhibitionApi.getBySlug(exhibition.slug);
      setSelectedExhibition(detail);
    } catch {
      setDetailError("Detail pameran gagal dimuat.");

      /*
       * Data dari daftar tetap dipertahankan sehingga modal
       * tidak langsung hilang ketika request detail gagal.
       */
    } finally {
      setDetailLoading(false);
    }
  };

  const closeDetail = () => {
    setSelectedExhibition(null);
    setDetailLoading(false);
    setDetailError("");
  };

  if (loading) {
    return (
      <section className="bg-[#FAF6EE] py-32 text-center">
        Loading...
      </section>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-[#FAF6EE] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h1
              className="text-5xl text-[#2A2010] md:text-6xl"
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
              Temukan berbagai pameran yang telah diikuti BigKoil di berbagai
              kota.
            </p>
          </div>

          {data.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
              <p className="text-[#6D5C45]">
                Belum ada data pameran.
              </p>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {data.map((item) => (
                <ExhibitionCard
                  key={item.id}
                  exhibition={item}
                  onDetail={() => openDetail(item)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <ExhibitionModal
        exhibition={selectedExhibition}
        loading={detailLoading}
        onClose={closeDetail}
      />

      {detailError && selectedExhibition && !detailLoading && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-red-600 px-5 py-3 text-sm font-medium text-white shadow-lg">
          {detailError}
        </div>
      )}
    </>
  );
}