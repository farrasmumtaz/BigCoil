const API_URL = import.meta.env.VITE_API_URL;

export default function ProductGallery({ galleries }) {
  if (!galleries?.length) return null;

  return (
    <section className="bg-[#F9F6F0] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2
            className="text-5xl text-[#2A2010]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Gallery
          </h2>

          <div className="mx-auto mt-6 h-px w-28 bg-[#B8935F]" />

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {galleries.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={`${API_URL}${image.image}`}
                alt=""
                className="aspect-3/4 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}