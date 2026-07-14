const API_URL = import.meta.env.VITE_API_URL;

export default function CollectionDetailTable({
  details,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="w-10 p-4 text-left">No</th>

            <th className="p-4 text-left">
              Hero Image
            </th>

            <th className="p-4 text-left">
              Collection
            </th>

            <th className="p-4 text-left">
              Hero Title
            </th>

            <th className="p-4 text-left">
              Hero Description
            </th>

            <th className="w-52 p-4 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>

          {details.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="p-10 text-center text-gray-500"
              >
                Collection Detail belum tersedia.
              </td>
            </tr>
          )}

          {details.map((item, index) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-4">
                {index + 1}
              </td>

              <td className="p-4">

                <img
                  src={`${API_URL}${item.heroImage}`}
                  alt={item.heroTitle}
                  className="h-24 w-36 rounded-lg object-cover"
                />

              </td>

              <td className="p-4 font-medium">
                {item.collection?.title}
              </td>

              <td className="p-4">
                {item.heroTitle}
              </td>

              <td className="max-w-sm p-4">

                <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                  {item.heroDescription}
                </p>

              </td>

              <td className="space-x-2 p-4 text-center">

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