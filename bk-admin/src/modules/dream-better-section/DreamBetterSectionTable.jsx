import toast from "react-hot-toast";

import DreamBetterSectionService from "./dreamBetterSection.service";

export default function DreamBetterSectionTable({
  sections,
  onEdit,
  onDelete,
}) {
  const remove = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus section ini?"
    );

    if (!ok) return;

    try {
      await DreamBetterSectionService.remove(id);

      toast.success("Section berhasil dihapus.");

      onDelete(id);
    } catch (err) {
      console.error(err);

      toast.error("Gagal menghapus section.");
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">
              Dream Better
            </th>

            <th className="p-3 text-left">
              Title
            </th>

            <th className="p-3 text-left">
              Content
            </th>

            <th className="p-3 text-center">
              Order
            </th>

            <th className="p-3 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {sections.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Dream Better Section.
              </td>
            </tr>
          )}

          {sections.map((item) => (
            <tr
              key={item.id}
              className="border-t align-top"
            >
              <td className="p-3">
                <div className="font-semibold">
                  {item.dreamBetter.title}
                </div>

                <div className="text-sm text-gray-500">
                  Dream Better ID : {item.dreamBetterId}
                </div>
              </td>

              <td className="p-3 font-semibold">
                {item.title}
              </td>

              <td className="max-w-lg p-3">
                <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                  {item.content}
                </p>
              </td>

              <td className="p-3 text-center">
                {item.order}
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