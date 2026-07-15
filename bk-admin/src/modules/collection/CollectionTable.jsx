import toast from "react-hot-toast";

import CollectionService from "./collection.service";

export default function CollectionTable({
  collections,
  onEdit,
  onReload,
}) {
  const remove = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus collection ini?"
    );

    if (!ok) return;

    try {
      await CollectionService.remove(id);

      toast.success("Collection berhasil dihapus.");

      onReload();
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
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Slug</th>
            <th className="p-3 text-center">Products</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {(!collections || collections.length === 0) && (
            <tr>
              <td
                colSpan={6}
                className="p-10 text-center text-gray-500"
              >
                Belum ada collection.
              </td>
            </tr>
          )}

          {collections?.map((item) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-3">
                <img
                  src={`${import.meta.env.VITE_API_URL}${item.coverImage}`}
                  alt={item.title}
                  className="h-20 w-32 rounded object-cover"
                />
              </td>

              <td className="p-3 font-medium">
                {item.title}
              </td>

              <td className="p-3">
                {item.category?.name}
              </td>

              <td className="p-3">
                {item.slug}
              </td>

              <td className="p-3 text-center">
                {item.products?.length ?? 0}
              </td>

              <td className="space-x-2 p-3 text-center">
                <button
                  onClick={() => onEdit(item)}
                  className="rounded bg-blue-600 px-4 py-2 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => remove(item.id)}
                  className="rounded bg-red-600 px-4 py-2 text-white"
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