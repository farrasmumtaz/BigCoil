import toast from "react-hot-toast";

import ExhibitionService from "./exhibition.service";

const API_URL = import.meta.env.VITE_API_URL;

export default function ExhibitionTable({
  data,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">
              Cover
            </th>

            <th className="p-4 text-left">
              Title
            </th>

            <th className="p-4 text-left">
              Slug
            </th>

            <th className="p-4 text-left">
              Location
            </th>

            <th className="p-4 text-left">
              Event Date
            </th>

            <th className="p-4 text-left">
              Description
            </th>

            <th className="p-4 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Exhibition.
              </td>
            </tr>
          )}

          {data.map((item) => (
            <tr
              key={item.id}
              className="border-t align-top"
            >
              <td className="p-4">
                <img
                  src={`${API_URL}${item.coverImage}`}
                  alt={item.title}
                  className="h-24 w-36 rounded-lg border object-cover"
                />
              </td>

              <td className="p-4 font-semibold">
                {item.title}
              </td>

              <td className="p-4">
                {item.slug}
              </td>

              <td className="p-4">
                {item.location}
              </td>

              <td className="p-4 whitespace-nowrap">
                {new Date(
                  item.eventDate
                ).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </td>

              <td className="max-w-md p-4">
                <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </td>

              <td className="space-x-2 p-4 text-center">
                <button
                  onClick={() => onEdit(item)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(item.id)}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}