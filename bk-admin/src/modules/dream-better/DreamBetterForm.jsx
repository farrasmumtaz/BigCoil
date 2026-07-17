import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DreamBetterService from "./dreamBetter.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  title: "",
  slug: "",
  description: "",
  heroImage: "",
};

export default function DreamBetterForm({
  dreamBetter,
  onSuccess,
}) {
  const [form, setForm] = useState(initialForm);

  const [imageFile, setImageFile] = useState(null);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!dreamBetter) {
      setForm(initialForm);
      setImageFile(null);
      return;
    }

    setForm({
      title: dreamBetter.title,
      slug: dreamBetter.slug,
      description: dreamBetter.description,
      heroImage: dreamBetter.heroImage,
    });

    setImageFile(null);
  }, [dreamBetter]);

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
    if (!imageFile) return form.heroImage;

    const uploaded =
      await DreamBetterService.uploadImage(imageFile);

    return uploaded.url;
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const heroImage = await uploadImage();

      const payload = {
        ...form,
        heroImage,
      };

      if (dreamBetter) {
        await DreamBetterService.update(
          dreamBetter.id,
          payload
        );

        toast.success("Dream Better berhasil diperbarui.");
      } else {
        await DreamBetterService.create(payload);

        toast.success("Dream Better berhasil ditambahkan.");
      }

      setForm(initialForm);
      setImageFile(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menyimpan Dream Better.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
        {dreamBetter
          ? "Edit Dream Better"
          : "Create Dream Better"}
      </h1>

      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div>
          <label>Title</label>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label>Slug</label>

          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label>Description</label>

          <textarea
            rows={6}
            name="description"
            value={form.description}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label>Hero Image</label>

          {(imageFile || form.heroImage) && (
            <img
              src={
                imageFile
                  ? URL.createObjectURL(imageFile)
                  : `${API_URL}${form.heroImage}`
              }
              alt=""
              className="mb-4 h-52 rounded-lg border object-cover"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        <button
          disabled={saving}
          className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white transition hover:bg-[#9A7745] disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : dreamBetter
            ? "Update"
            : "Create"}
        </button>
      </form>
    </div>
  );
}