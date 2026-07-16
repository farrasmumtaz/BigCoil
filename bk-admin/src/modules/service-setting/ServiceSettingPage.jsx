import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ServiceSettingService from "./serviceSetting.service";

const initialForm = {
  embedUrl: "",
};

export default function ServiceSettingPage() {
  const [form, setForm] =
    useState(initialForm);

  const [saving, setSaving] =
    useState(false);

  const fetchSetting = async () => {
    try {
      const data =
        await ServiceSettingService.get();

      setForm({
        embedUrl:
          data?.embedUrl ?? "",
      });
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal mengambil Service Setting."
      );
    }
  };

  useEffect(() => {
    fetchSetting();
  }, []);

  const handleChange = (e) => {
    setForm({
      embedUrl: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await ServiceSettingService.update(
        form,
      );

      toast.success(
        "Google Maps berhasil diperbarui."
      );
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal memperbarui Google Maps."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
        Service Setting
      </h1>

      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div>
          <label className="font-medium">
            Google Maps Embed URL
          </label>

          <textarea
            rows={8}
            name="embedUrl"
            value={form.embedUrl}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3 font-mono text-sm"
            placeholder="https://www.google.com/maps/embed?pb=..."
          />
        </div>

        {form.embedUrl && (
          <div>
            <label className="mb-2 block font-medium">
              Preview
            </label>

            <iframe
              src={form.embedUrl}
              className="h-[450px] w-full rounded-xl border"
              loading="lazy"
            />
          </div>
        )}

        <button
          disabled={saving}
          className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
        >
          {saving
            ? "Saving..."
            : "Save"}
        </button>
      </form>
    </div>
  );
}