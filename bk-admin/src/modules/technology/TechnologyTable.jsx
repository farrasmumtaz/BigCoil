import toast from "react-hot-toast";

import TechnologyService from "./technology.service";

const API_URL = import.meta.env.VITE_API_URL;

export default function TechnologyTable({
  technologies,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>

            <th className="p-3 text-left">
              Image
            </th>

            <th className="p-3 text-left">
              Type
            </th>

            <th className="p-3 text-left">
              Title
            </th>

            <th className="p-3 text-left">
              Subtitle
            </th>

            <th className="p-3 text-left">
              Description
            </th>

            <th className="p-3 text-center">
              Action
            </th>

          </tr>
        </thead>

        <tbody>

          {technologies.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Technology.
              </td>
            </tr>
          )}

          {technologies.map((item) => (
            <tr
              key={item.id}
              className="border-t align-top"
            >
              <td className="p-3">

                <img
                  src={`${API_URL}${item.image}`}
                  alt={item.title}
                  className="h-20 w-20 rounded-lg border object-cover"
                />

              </td>

              <td className="p-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.type === "COIL"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {item.type}
                </span>
              </td>

              <td className="p-3 font-semibold">
                {item.title}
              </td>

              <td className="p-3">
                {item.subtitle || "-"}
              </td>

              <td className="max-w-md p-3">

                <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

              </td>

              <td className="space-x-2 p-3 text-center">

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