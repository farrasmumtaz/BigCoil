import toast from "react-hot-toast";

import ProductSpecificationService from "./productSpecification.service";

const API_URL = import.meta.env.VITE_API_URL;

export default function ProductSpecificationTable({
  specifications,
  onEdit,
  onDelete,
}) {
  const remove = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus specification ini?"
    );

    if (!ok) return;

    try {
      await ProductSpecificationService.remove(id);

      toast.success(
        "Specification berhasil dihapus."
      );

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
            <th className="p-3 text-left">
              Icon
            </th>

            <th className="p-3 text-left">
              Product
            </th>

            <th className="p-3 text-left">
              Label
            </th>

            <th className="p-3 text-left">
              Value
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
          {specifications.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Product Specification.
              </td>
            </tr>
          )}

          {specifications.map((item) => (
            <tr
              key={item.id}
              className="border-t align-middle"
            >
              <td className="p-3">
                {item.icon ? (
                  <img
                    src={`${API_URL}${item.icon}`}
                    alt={item.label}
                    className="h-14 w-14 rounded-lg border object-contain"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border text-xs text-gray-400">
                    No Icon
                  </div>
                )}
              </td>

              <td className="p-3">
                <div className="font-semibold">
                  {item.product?.title}
                </div>

                <div className="mt-1 text-xs text-gray-500">
                  Product ID : {item.productId}
                </div>
              </td>

              <td className="p-3 font-medium">
                {item.label}
              </td>

              <td className="p-3">
                {item.value}
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