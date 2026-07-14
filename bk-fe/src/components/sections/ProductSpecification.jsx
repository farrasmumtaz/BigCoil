import { useMemo } from "react";

export default function ProductSpecification({
  specifications = [],
}) {
  const apiUrl = useMemo(
    () => import.meta.env.VITE_API_URL,
    []
  );

  if (!specifications.length) return null;

  return (
    <section className="bg-[#F8F4EE] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2
            className="text-5xl text-[#2A2010]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Specifications
          </h2>

          <div className="mx-auto mt-6 h-px w-28 bg-[#C8A46B]" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {specifications.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {item.icon && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={`${apiUrl}${item.icon}`}
                    alt={item.label}
                    className="h-20 w-20 object-contain"
                  />
                </div>
              )}

              <h3
                className="mb-3 text-center text-2xl text-[#2A2010]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {item.label}
              </h3>

              <p className="text-center leading-8 text-[#6B5F4A]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}