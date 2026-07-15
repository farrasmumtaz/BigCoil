export default function ContactTable({ data, onView, onDelete }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Contact Message.
              </td>
            </tr>
          )}

          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-4 font-semibold">{item.name}</td>
              <td className="p-4">{item.email}</td>
              <td className="p-4">{item.phone || "-"}</td>
              <td className="p-4 whitespace-nowrap">
                {new Date(item.createdAt).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </td>

              <td className="space-x-2 p-4 text-center">
                <button
                  type="button"
                  onClick={() => onView(item)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  View
                </button>

                <button
                  type="button"
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