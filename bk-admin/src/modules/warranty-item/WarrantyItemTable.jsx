import {
  Edit,
  Trash2,
  ImageOff,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function WarrantyItemTable({
  items,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-[#B8935F] text-white">
          <tr>
            <th className="px-6 py-4 text-left">
              Image
            </th>

            <th className="px-6 py-4 text-left">
              Title
            </th>

            <th className="px-6 py-4 text-center">
              Sort
            </th>

            <th className="px-6 py-4 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="py-10 text-center text-gray-500"
              >
                No warranty item found.
              </td>
            </tr>
          )}

          {items.map((item) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="px-6 py-4">
                {item.image ? (
                  <img
                    src={`${API_URL}${item.image}`}
                    alt={item.title}
                    className="h-20 w-28 rounded-lg border object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-28 items-center justify-center rounded-lg border bg-gray-100">
                    <ImageOff
                      size={28}
                      className="text-gray-400"
                    />
                  </div>
                )}
              </td>

              <td className="px-6 py-4">
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                    {item.description}
                  </p>
                )}
              </td>

              <td className="px-6 py-4 text-center">
                {item.sortOrder}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="rounded-lg bg-amber-500 p-2 text-white transition hover:bg-amber-600"
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}