import { useMemo, useState } from "react";

export default function DealerTable({
  data,
  onEdit,
  onDelete,
}) {
  const [search, setSearch] =
    useState("");

  const [selectedIsland, setSelectedIsland] =
    useState("all");

  const [
    selectedProvince,
    setSelectedProvince,
  ] = useState("all");

  const islands = useMemo(() => {
    return [
      "all",
      ...new Set(
        data.map((item) => item.island),
      ),
    ];
  }, [data]);

  const provinces = useMemo(() => {
    return [
      "all",
      ...new Set(
        data
          .filter(
            (item) =>
              selectedIsland ===
                "all" ||
              item.island ===
                selectedIsland,
          )
          .map(
            (item) => item.province,
          ),
      ),
    ];
  }, [data, selectedIsland]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const keyword =
        search.toLowerCase();

      const matchSearch =
        item.name
          .toLowerCase()
          .includes(keyword) ||
        item.city
          .toLowerCase()
          .includes(keyword) ||
        item.province
          .toLowerCase()
          .includes(keyword);

      const matchIsland =
        selectedIsland === "all" ||
        item.island ===
          selectedIsland;

      const matchProvince =
        selectedProvince ===
          "all" ||
        item.province ===
          selectedProvince;

      return (
        matchSearch &&
        matchIsland &&
        matchProvince
      );
    });
  }, [
    data,
    search,
    selectedIsland,
    selectedProvince,
  ]);

  const remove = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus Dealer ini?"
    );

    if (!ok) return;

    await onDelete(id);
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <div className="flex flex-wrap items-center gap-4 border-b p-5">

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search dealer..."
          className="flex-1 rounded-lg border p-3"
        />

        <select
          value={selectedIsland}
          onChange={(e) => {
            setSelectedIsland(
              e.target.value,
            );

            setSelectedProvince(
              "all",
            );
          }}
          className="rounded-lg border p-3"
        >
          {islands.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item === "all"
                ? "All Islands"
                : item}
            </option>
          ))}
        </select>

        <select
          value={selectedProvince}
          onChange={(e) =>
            setSelectedProvince(
              e.target.value,
            )
          }
          className="rounded-lg border p-3"
        >
          {provinces.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item === "all"
                ? "All Provinces"
                : item}
            </option>
          ))}
        </select>

      </div>

      <div className="border-b bg-gray-50 px-5 py-3 text-sm text-gray-500">
        Menampilkan{" "}
        <span className="font-semibold">
          {filteredData.length}
        </span>{" "}
        Dealer
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Island
              </th>

              <th className="p-3 text-left">
                Province
              </th>

              <th className="p-3 text-left">
                City
              </th>

              <th className="p-3 text-left">
                Phone
              </th>

              <th className="p-3 text-center">
                Maps
              </th>

              <th className="p-3 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {filteredData.length ===
              0 && (
              <tr>
                <td
                  colSpan={7}
                  className="p-10 text-center text-gray-500"
                >
                  Tidak ada Dealer.
                </td>
              </tr>
            )}

            {filteredData.map(
              (item) => (
                <tr
                  key={item.id}
                  className="border-t"
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
                    {item.phone ||
                      "-"}
                  </td>

                  <td className="p-3 text-center">
                    {item.mapsUrl ? (
                      <a
                        href={
                          item.mapsUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Open
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td className="space-x-2 p-3 text-center">
                    <button
                      onClick={() =>
                        onEdit(item)
                      }
                      className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        remove(item.id)
                      }
                      className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ),
            )}

          </tbody>
        </table>

      </div>

    </div>
  );
}