import { useEffect, useMemo, useState } from "react";

import { dealerApi } from "../../services/dealer";

function Flourish() {
  return (
    <svg
      width="120"
      height="16"
      viewBox="0 0 120 16"
      fill="none"
      className="mx-auto mt-5"
    >
      <line x1="0" y1="8" x2="46" y2="8" stroke="#B8935F" />
      <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#B8935F" />
      <line x1="74" y1="8" x2="120" y2="8" stroke="#B8935F" />
    </svg>
  );
}

export default function Dealer() {
  const [islands, setIslands] = useState([]);
  const [selectedIsland, setSelectedIsland] = useState(null);

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const [dealers, setDealers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingDealers, setLoadingDealers] = useState(false);

  const handleSelectIsland = async (island) => {
    setSelectedIsland(island);
    setSelectedCity(null);
    setDealers([]);
    setLoadingCities(true);

    try {
      const data = await dealerApi.getCities(island);
      setCities(data);

      if (data.length > 0) {
        await handleSelectCity(data[0]);
      } else {
        setSelectedCity(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingCities(false);
    }
  };

  const handleSelectCity = async (city) => {
    setSelectedCity(city);
    setLoadingDealers(true);

    try {
      const data = await dealerApi.getDealers(city);
      setDealers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingDealers(false);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const islandsData = await dealerApi.getIslands();
        setIslands(islandsData);

        if (islandsData.length > 0) {
          await handleSelectIsland(islandsData[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const noCities = useMemo(
    () => !loadingCities && cities.length === 0,
    [loadingCities, cities],
  );

  if (loading) {
    return <section className="py-32 text-center">Loading...</section>;
  }

  return (
    <section className="bg-[#FAF6EE] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1
            className="text-5xl text-[#2A2010]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            DEALER RESMI
          </h1>

          <Flourish />

          <p className="mx-auto mt-6 max-w-3xl text-[#6D5C45]">
            Temukan dealer resmi BigKoil di berbagai kota di Indonesia.
          </p>
        </div>

        {/* Pilihan Pulau */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {islands.map((island) => (
            <button
              key={island}
              onClick={() => handleSelectIsland(island)}
              className={`rounded-full px-8 py-3 transition ${
                selectedIsland === island
                  ? "bg-[#B8935F] text-white"
                  : "bg-white text-[#2A2010] hover:bg-[#F1E9DA]"
              }`}
            >
              {island}
            </button>
          ))}
        </div>

        {/* Pilihan Kota - horizontal scroll, 3 terlihat, sisanya digeser */}
        {loadingCities ? (
          <p className="mb-16 text-center text-[#6D5C45]">Memuat kota...</p>
        ) : noCities ? (
          <p className="mb-16 text-center text-[#6D5C45]">
            Belum ada kota untuk pulau ini.
          </p>
        ) : (
          <div className="relative mb-16">
            <div
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:thin]"
              style={{ scrollPaddingLeft: "0px" }}
            >
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleSelectCity(city)}
                  className={`w-[calc((100%-2rem)/3)] flex-none snap-start rounded-xl border p-5 text-left transition ${
                    selectedCity === city
                      ? "border-[#B8935F] bg-[#B8935F] text-white"
                      : "border-[#DCCFB6] bg-white hover:border-[#B8935F]"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Daftar Dealer */}
        {loadingDealers ? (
          <p className="text-center text-[#6D5C45]">Memuat dealer...</p>
        ) : dealers.length === 0 ? (
          <p className="text-center text-[#6D5C45]">
            Dealer tidak ditemukan.
          </p>
        ) : (
          <div className="grid gap-8">
            {dealers.map((dealer) => (
              <div
                key={dealer.id}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <h2
                  className="mb-3 text-3xl text-[#2A2010]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {dealer.name}
                </h2>

                <p className="text-[#6D5C45]">{dealer.address}</p>

                {dealer.phone && (
                  <p className="mt-3 text-[#6D5C45]">☎ {dealer.phone}</p>
                )}

                {dealer.mapsUrl && (
                  <a
                    href={dealer.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block rounded-full bg-[#B8935F] px-6 py-3 text-white transition hover:bg-[#9D7A46]"
                  >
                    Buka Google Maps
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}