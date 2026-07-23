const API_URL = import.meta.env.VITE_API_URL;

export default function ExhibitionCard({ exhibition, onDetail }) {
  const coverImageUrl = exhibition.coverImage?.startsWith("http")
    ? exhibition.coverImage
    : `${API_URL}${exhibition.coverImage}`;

  const formattedDate = new Date(
    exhibition.eventDate
  ).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const handleCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onDetail();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onDetail}
      onKeyDown={handleCardKeyDown}
      className="group cursor-pointer overflow-hidden rounded-[28px] bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="h-72 overflow-hidden">
        <img
          src={coverImageUrl}
          alt={exhibition.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-7">
        <h2
          className="text-4xl leading-tight text-[#2A2010]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {exhibition.title}
        </h2>

        <p className="mt-1 font-medium text-[#B8935F]">
          {formattedDate}
        </p>

        <p className="mt-6 text-lg text-[#6D5C45]">
          {exhibition.location}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onDetail();
            }}
            className="rounded-full bg-[#2A2010] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Lihat Detail
          </button>

          {exhibition.mapsUrl && (
            <a
              href={exhibition.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="rounded-full border border-[#B8935F] px-6 py-3 font-semibold text-[#9A713B] transition hover:bg-[#B8935F] hover:text-white"
            >
              Buka Maps
            </a>
          )}
        </div>
      </div>
    </article>
  );
}