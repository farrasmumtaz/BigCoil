export default function ContactDetailModal({
  message,
  onClose,
}) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Contact Message
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Name
            </label>

            <p className="mt-1">
              {message.name}
            </p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-500">
              Email
            </label>

            <p className="mt-1">
              {message.email}
            </p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-500">
              Phone
            </label>

            <p className="mt-1">
              {message.phone || "-"}
            </p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-500">
              Sent At
            </label>

            <p className="mt-1">
              {new Date(
                message.createdAt
              ).toLocaleString("id-ID")}
            </p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-500">
              Message
            </label>

            <div className="mt-2 rounded-lg border bg-gray-50 p-4 whitespace-pre-wrap leading-7">
              {message.message}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-[#B8935F] px-6 py-3 font-semibold text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}