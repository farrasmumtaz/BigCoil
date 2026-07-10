export default function ProductDescription({ descriptions }) {
  if (!descriptions?.length) return null;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        {descriptions.map((item) => (
          <div
            key={item.id}
            className="mx-auto mb-20 max-w-4xl last:mb-0"
          >
            <h2
              className="mb-6 text-center text-5xl text-[#2A2010]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {item.title}
            </h2>

            <div className="mx-auto mb-10 h-px w-32 bg-[#C8A46B]" />

            <p className="text-center text-lg leading-9 text-[#5C5145]">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}