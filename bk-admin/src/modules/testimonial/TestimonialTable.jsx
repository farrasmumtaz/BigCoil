import toast from "react-hot-toast";

import TestimonialService from "./testimonial.service";

const API_URL = import.meta.env.VITE_API_URL;

export default function TestimonialTable({
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
              Image
            </th>

            <th className="p-4 text-left">
              Created At
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
                colSpan={3}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Testimonial.
              </td>
            </tr>
          )}

          {data.map((item) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-4">
                <img
                  src={`${API_URL}${item.image}`}
                  alt="testimonial"
                  className="h-28 w-52 rounded-lg border object-cover"
                />
              </td>

              <td className="p-4">
                {new Date(
                  item.createdAt
                ).toLocaleDateString(
                  "id-ID",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </td>

              <td className="space-x-2 p-4 text-center">
                <button
                  onClick={() => onEdit(item)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(item.id)
                  }
                  className="rounded-lg bg-red-600 px-4 py-2 text-white"
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