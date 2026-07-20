const API_URL = import.meta.env.VITE_API_URL;

export default function ProductTechnology({ technologies }) {
  if (!technologies?.length) return null;

  return (
    <section className="bg-[#FAF6EE]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#B8935F]">
            Inovasi Kami
          </p>
          <h2
            className="text-5xl text-[#2A2010]"
            style={{ fontFamily: "Cambria, serif" }}
          >
            Technology
          </h2>
          <div className="mx-auto mt-6 h-px w-28 bg-[#B8935F]" />
        </div>

        <div>
          {technologies.map((item, index) => {
            const tech = item.technology;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.id}
                className={`grid items-center gap-14 border-t border-[#B8935F]/15 py-16 first:border-t-0 first:pt-0 lg:grid-cols-2 ${isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
              >
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={`${API_URL}${tech.image}`}
                    alt={tech.title}
                    loading="lazy"
                    className="w-full object-cover transition duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>

                <div>
                  <span
                    className="mb-4 block text-4xl font-medium leading-none text-[#B8935F]/40"
                    style={{ fontFamily: "Cambria, serif" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2
                    className="mb-4 text-4xl text-[#2A2010] md:text-5xl"
                    style={{ fontFamily: "Cambria, serif" }}
                  >
                    {tech.title}
                  </h2>

                  {tech.subtitle && (
                    <h3 className="mb-6 text-xl text-[#8A7550]">
                      {tech.subtitle}
                    </h3>
                  )}

                  <p className="max-w-md leading-8 text-[#6B5F4A]">
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