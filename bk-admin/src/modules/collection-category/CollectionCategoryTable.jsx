export default function CollectionCategoryTable({
  data,
  onEdit,
  onDelete,
}) {
  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3">No</th>
            <th>Name</th>
            <th>Slug</th>
            <th width="180">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className="border-b"
            >
              <td className="py-4">
                {index + 1}
              </td>

              <td>{item.name}</td>

              <td>{item.slug}</td>

              <td className="space-x-2">
                <button
                  onClick={() => onEdit(item)}
                  className="rounded bg-blue-500 px-4 py-2 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(item.id)}
                  className="rounded bg-red-500 px-4 py-2 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="py-6 text-center text-gray-500"
              >
                Tidak ada data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}