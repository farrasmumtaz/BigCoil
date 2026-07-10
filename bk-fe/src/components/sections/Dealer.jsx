import { useEffect, useState } from "react";

import { dealerApi } from "../../services/dealer";

const API_URL = import.meta.env.VITE_API_URL;

export default function Dealer() {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDealer = async () => {
      try {
        const data = await dealerApi.getAll();
        setDealers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDealer();
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
            Official Dealer
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[#6D5C45]">
            Temukan dealer resmi BigKoil terdekat untuk mencoba
            berbagai koleksi spring bed premium kami.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {dealers.map((dealer) => (
            <div
              key={dealer.id}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              {dealer.image && (
                <img
                  src={`${API_URL}${dealer.image}`}
                  alt={dealer.name}
                  className="h-72 w-full object-cover"
                />
              )}

              <div className="space-y-4 p-8">

                <h2 className="text-3xl font-semibold text-[#2A2010]">
                  {dealer.name}
                </h2>

                <p className="text-[#6D5C45]">
                  {dealer.address}
                </p>

                {dealer.phone && (
                  <p>
                    📞 {dealer.phone}
                  </p>
                )}

                {dealer.whatsapp && (
                  <a
                    href={`https://wa.me/${dealer.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full bg-[#B8935F] px-6 py-3 text-white transition hover:bg-[#A27E49]"
                  >
                    WhatsApp
                  </a>
                )}

                {dealer.mapsUrl && (
                  <a
                    href={dealer.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-4 inline-block rounded-full border border-[#B8935F] px-6 py-3 text-[#B8935F]"
                  >
                    Google Maps
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}