const API_URL = import.meta.env.VITE_API_URL;

export default function ProductTechnology({ technologies }) {
  if (!technologies?.length) return null;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <h2
            className="text-5xl text-[#2A2010]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Technology
          </h2>

          <div className="mx-auto mt-6 h-px w-28 bg-[#B8935F]" />
        </div>

        <div className="space-y-24">

          {technologies.map((item, index) => {
            const tech = item.technology;

            return (
              <div
                key={item.id}
                className={`grid items-center gap-14 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <img
                    src={`${API_URL}${tech.image}`}
                    alt={tech.title}
                    className="w-full rounded-3xl shadow-xl"
                  />
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-[#B8935F]">
                    Technology
                  </p>

                  <h2
                    className="mb-4 text-5xl text-[#2A2010]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {tech.title}
                  </h2>

                  {tech.subtitle && (
                    <h3 className="mb-6 text-xl text-[#7B6851]">
                      {tech.subtitle}
                    </h3>
                  )}

                  <p className="leading-8 text-[#5C5145]">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}