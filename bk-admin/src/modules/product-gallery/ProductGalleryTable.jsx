import toast from "react-hot-toast";

import ProductGalleryService from "./productGallery.service";

const API_URL = import.meta.env.VITE_API_URL;

export default function ProductGalleryTable({
  galleries,
  onEdit,
  onDelete,
}) {
  const remove = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus gallery ini?"
    );

    if (!ok) return;

    try {
      await ProductGalleryService.remove(id);

      toast.success("Gallery berhasil dihapus.");

      onDelete();
    } catch (err) {
      console.error(err);

    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Image</th>

            <th className="p-3 text-left">
              Product
            </th>

            <th className="p-3 text-center">
              Sort Order
            </th>

            <th className="p-3 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>

          {galleries.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Product Gallery.
              </td>
            </tr>
          )}

          {galleries.map((item) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-3">

                <img
                  src={`${API_URL}${item.image}`}
                  alt={item.product?.title}
                  className="h-24 w-36 rounded-lg object-cover"
                />

              </td>

              <td className="p-3">

                <div className="font-semibold">
                  {item.product?.title}
                </div>

                <div className="mt-1 text-xs text-gray-500">
                  Product ID : {item.productId}
                </div>

              </td>

              <td className="p-3 text-center">
                {item.sortOrder}
              </td>

              <td className="space-x-2 p-3 text-center">

                <button
                  onClick={() => onEdit(item)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Edit
                </button>

                <button
                  onClick={() => remove(item.id)}
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