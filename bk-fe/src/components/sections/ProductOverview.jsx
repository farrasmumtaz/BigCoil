const API_URL = import.meta.env.VITE_API_URL;

export default function ProductOverview({
  descriptions = [],
  galleries = [],
  specifications = [],
}) {
  if (!descriptions?.length && !galleries?.length && !specifications?.length) {
    return null;
  }

  return (
    <section className="bg-[#F8F4EE] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* KIRI: Deskripsi bertumpuk */}
          <div className="flex flex-col justify-center">
            {descriptions.map((item, i) => (
              <div
                key={item.id}
                className={i > 0 ? "mt-10 border-t border-[#C8A46B]/25 pt-10" : ""}
              >
                <h3
                  className="mb-4 text-3xl text-[#2A2010]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>
                <p className="leading-8 text-[#6B5F4A]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* KANAN: Galeri, sticky biar jadi anchor visual pas discroll */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {galleries.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {galleries.slice(0, 4).map((image, i) => (
                  <div
                    key={image.id}
                    className={`overflow-hidden rounded-2xl shadow-lg ${
                      i === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <img
                      src={`${API_URL}${image.image}`}
                      alt=""
                      className={`w-full object-cover transition duration-500 hover:scale-105 ${
                        i === 0 ? "aspect-[16/10]" : "aspect-square"
                      }`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* SPEC: info bar compact */}
        {specifications.length > 0 && (
          <div className="mt-20 rounded-3xl bg-white px-8 py-10 shadow-md">
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
              {specifications.map((item) => (
                <div key={item.id} className="text-center">
                  {item.icon && (
                    <img
                      src={`${API_URL}${item.icon}`}
                      alt={item.label}
                      className="mx-auto mb-3 h-10 w-10 object-contain"
                    />
                  )}
                  <p className="text-xs tracking-wide text-[#B8935F] uppercase">
                    {item.label}
                  </p>
                  <p
                    className="mt-1 text-lg text-[#2A2010]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}