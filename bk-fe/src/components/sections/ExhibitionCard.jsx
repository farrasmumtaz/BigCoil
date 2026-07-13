import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function ExhibitionCard({ exhibition }) {
  return (
    <Link
      to={`/exhibition/${exhibition.slug}`}
      className="group"
    >
      <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2">

        <img
          src={`${API_URL}${exhibition.coverImage}`}
          alt={exhibition.title}
          className="aspect-[4/3] w-full object-cover duration-500 group-hover:scale-105"
        />

        <div className="space-y-3 p-6">

          <h2
            className="text-3xl text-[#2A2010]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {exhibition.title}
          </h2>

          <p className="text-[#B8935F]">
            {new Date(exhibition.eventDate).toLocaleDateString("id-ID")}
          </p>

          <p className="text-[#6D5C45]">
            {exhibition.location}
          </p>

          <p className="line-clamp-3 text-[#6D5C45]">
            {exhibition.description}
          </p>

        </div>

      </div>
    </Link>
  );
}