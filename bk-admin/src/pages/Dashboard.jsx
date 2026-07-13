import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-8 text-4xl font-bold">
          Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-gray-500">
              Company
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              1
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-gray-500">
              Hero
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              3
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-gray-500">
              Collection
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              12
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-gray-500">
              Product
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              48
            </h2>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}