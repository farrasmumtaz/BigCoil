import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

export default function AboutCompanyTable({
  data,
  onEdit,
  onDelete,
}) {
  const remove = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus About Company ini?"
    );

    if (!ok) return;

    try {
      await onDelete(id);

      toast.success(
        "About Company berhasil dihapus."
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">
              Image
            </th>

            <th className="p-4 text-left">
              Title
            </th>

            <th className="p-4 text-left">
              Subtitle
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
                colSpan={5}
                className="p-8 text-center text-gray-500"
              >
                Belum ada About Company.
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
                  src={`${API_URL}${item.image}`}
                  alt={item.title}
                  className="h-24 w-40 rounded-lg border object-cover"
                />
              </td>

              <td className="p-4 font-semibold">
                {item.title}
              </td>

              <td className="p-4">
                {item.subtitle}
              </td>

              <td className="max-w-lg p-4">
                <p className="line-clamp-4 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </td>

              <td className="space-x-2 p-4 text-center">
                <button
                  onClick={() => onEdit(item)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    remove(item.id)
                  }
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
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