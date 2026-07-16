import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ServiceCenterService from "./serviceCenter.service";

const initialForm = {
  name: "",
  island: "",
  province: "",
  city: "",
  address: "",
  phone: "",
  mapsUrl: "",
};

export default function ServiceCenterForm({
  serviceCenter,
  onSuccess,
}) {
  const [form, setForm] = useState(initialForm);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!serviceCenter) {
      setForm(initialForm);
      return;
    }

    setForm({
      name: serviceCenter.name,
      island: serviceCenter.island,
      province: serviceCenter.province,
      city: serviceCenter.city,
      address: serviceCenter.address,
      phone: serviceCenter.phone || "",
      mapsUrl: serviceCenter.mapsUrl || "",
    });
  }, [serviceCenter]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      if (serviceCenter) {
        await ServiceCenterService.update(
          serviceCenter.id,
          form,
        );

        toast.success(
          "Service Center berhasil diperbarui."
        );
      } else {
        await ServiceCenterService.create(form);

        toast.success(
          "Service Center berhasil ditambahkan."
        );
      }

      setForm(initialForm);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menyimpan Service Center."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
        {serviceCenter
          ? "Edit Service Center"
          : "Create Service Center"}
      </h1>

      <form
        onSubmit={submit}
        className="grid gap-6 md:grid-cols-2"
      >
        <div>
          <label>Name</label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label>Island</label>

          <input
            name="island"
            value={form.island}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label>Province</label>

          <input
            name="province"
            value={form.province}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label>City</label>

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label>Address</label>

          <textarea
            rows={4}
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label>Phone</label>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Google Maps URL</label>

          <input
            name="mapsUrl"
            value={form.mapsUrl}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div className="md:col-span-2">
          <button
            disabled={saving}
            className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
          >
            {saving
              ? "Saving..."
              : serviceCenter
              ? "Update"
              : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}