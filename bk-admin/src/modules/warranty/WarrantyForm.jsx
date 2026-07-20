import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import WarrantyService from "./warranty.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  title: "",
  description: "",
  heroImage: "",
};

export default function WarrantyForm({ warranty, onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!warranty) return;

    // Menggunakan operator || "" untuk menghindari error uncontrolled input jika data dari backend null
    setForm({
      title: warranty.title || null,
      description: warranty.description || "",
      heroImage: warranty.heroImage || "",
    });

    setImageFile(null);
  }, [warranty]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    if (!e.target.files?.length) return;
    setImageFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!imageFile) return form.heroImage || undefined; // Ubah ke undefined jika kosong

    const uploaded = await WarrantyService.uploadImage(imageFile);
    return uploaded.url;
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const heroImage = await uploadImage();

      // Membersihkan data: Jika string kosong "", ganti jadi undefined agar lolos @IsOptional()
      const payload = {
        title: form.title.trim() === "" ? undefined : form.title,
        description: form.description.trim() === "" ? undefined : form.description,
        heroImage: heroImage === "" ? undefined : heroImage,
      };

      await WarrantyService.update(payload);

      toast.success("Warranty berhasil diperbarui.");
      setImageFile(null);
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Gagal memperbarui warranty.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">Edit Warranty</h1>

      <form onSubmit={submit} className="space-y-6">
        <div>
          <label className="mb-2 block font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            // Atribut 'required' TELAH DIHAPUS agar bisa dikosongkan
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Description</label>
          <textarea
            rows={8}
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            // Atribut 'required' TELAH DIHAPUS agar bisa dikosongkan
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Hero Image</label>

          {(imageFile || form.heroImage) && (
            <img
              src={
                imageFile
                  ? URL.createObjectURL(imageFile)
                  : `${API_URL}${form.heroImage}`
              }
              alt=""
              className="mb-4 h-56 w-full rounded-lg border object-cover"
            />
          )}

          <input type="file" accept="image/*" onChange={handleImage} />
        </div>


        <button
          disabled={saving}
          className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
        >
          {saving ? "Saving..." : "Update"}
        </button>
      </form>
    </div>
  );
}