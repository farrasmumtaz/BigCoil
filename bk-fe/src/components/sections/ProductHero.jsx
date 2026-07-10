const API_URL = import.meta.env.VITE_API_URL;

export default function ProductHero({ product }) {
  return (
    <section className="relative h-screen overflow-hidden">

      <img
        src={`${API_URL}${product.heroImage}`}
        alt={product.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="text-center text-white">

          <h1
            className="text-6xl md:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {product.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl">
            {product.shortDescription}
          </p>

        </div>

      </div>

    </section>
  );
}