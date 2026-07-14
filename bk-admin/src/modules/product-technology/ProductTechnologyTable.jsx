import toast from "react-hot-toast";

import ProductTechnologyService from "./productTechnology.service";

export default function ProductTechnologyTable({
  productTechnologies,
  onEdit,
  onDelete,
}) {
  const remove = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus Product Technology ini?"
    );

    if (!ok) return;

    try {
      await ProductTechnologyService.remove(id);

      toast.success(
        "Product Technology berhasil dihapus."
      );

      onDelete();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menghapus Product Technology."
      );
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>

            <th className="p-3 text-left">
              Product
            </th>

            <th className="p-3 text-left">
              Technology
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

          {productTechnologies.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Product Technology.
              </td>
            </tr>
          )}

          {productTechnologies.map((item) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-3">

                <div className="font-semibold">
                  {item.product?.title}
                </div>

                <div className="mt-1 text-xs text-gray-500">
                  Product ID : {item.productId}
                </div>

              </td>

              <td className="p-3">

                <div className="font-medium">
                  {item.technology?.title}
                </div>

                <div className="mt-1 text-xs text-gray-500">
                  Technology ID : {item.technologyId}
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