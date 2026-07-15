import toast from "react-hot-toast";

import ProductService from "./product.service";

const API_URL = import.meta.env.VITE_API_URL;

export default function ProductTable({
  products,
  onEdit,
  onDelete,
}) {
  const remove = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus Product?"
    );

    if (!ok) return;

    try {
        await ProductService.remove(id);

        toast.success("Product berhasil dihapus.");

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
            <th className="p-3 text-left">Hero</th>

            <th className="p-3 text-left">
              Product
            </th>

            <th className="p-3 text-left">
              Collection
            </th>

            <th className="p-3 text-center">
              Gallery
            </th>

            <th className="p-3 text-center">
              Description
            </th>

            <th className="p-3 text-center">
              Specification
            </th>

            <th className="p-3 text-center">
              Technology
            </th>

            <th className="p-3 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>

          {products.length === 0 && (
            <tr>
              <td
                colSpan={8}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Product.
              </td>
            </tr>
          )}

          {products.map((item) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-3">
                <img
                  src={`${API_URL}${item.heroImage}`}
                  alt={item.title}
                  className="h-20 w-32 rounded object-cover"
                />
              </td>

              <td className="p-3">

                <div className="font-semibold">
                  {item.title}
                </div>

                <div className="mt-1 text-xs text-gray-500">
                  {item.slug}
                </div>

              </td>

              <td className="p-3">
                {item.collection?.title}
              </td>

              <td className="p-3 text-center">
                {item.galleries?.length ?? 0}
              </td>

              <td className="p-3 text-center">
                {item.descriptions?.length ?? 0}
              </td>

              <td className="p-3 text-center">
                {item.productSpecifications?.length ?? 0}
              </td>

              <td className="p-3 text-center">
                {item.productTechnologies?.length ?? 0}
              </td>

              <td className="space-x-2 p-3 text-center">

                <button
                  onClick={() => onEdit(item)}
                  className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Edit
                </button>

                <button
                  onClick={() => remove(item.id)}
                  className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
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