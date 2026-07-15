export default function DealerTable({
  data,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Island</th>
            <th className="p-3 text-left">Province</th>
            <th className="p-3 text-left">City</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Address</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="p-10 text-center text-gray-500"
              >
                Belum ada Dealer.
              </td>
            </tr>
          )}

          {data.map((item) => (
            <tr
              key={item.id}
              className="border-t align-top"
            >
              <td className="p-3 font-semibold">
                {item.name}
              </td>

              <td className="p-3">
                {item.island}
              </td>

              <td className="p-3">
                {item.province}
              </td>

              <td className="p-3">
                {item.city}
              </td>

              <td className="p-3">
                {item.phone || "-"}
              </td>

              <td className="max-w-sm p-3">
                <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                  {item.address}
                </p>

                {item.mapsUrl && (
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm text-blue-600 hover:underline"
                  >
                    Open Maps
                  </a>
                )}
              </td>

              <td className="space-x-2 p-3 text-center">
                <button
                  onClick={() => onEdit(item)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Edit
                </button>

                <button
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