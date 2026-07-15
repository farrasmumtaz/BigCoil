import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ExhibitionService from "./exhibition.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  title: "",
  slug: "",
  location: "",
  eventDate: "",
  description: "",
  coverImage: "",
};

export default function ExhibitionForm({
  exhibition,
  onSuccess,
}) {
  const [form, setForm] = useState(initialForm);

  const [imageFile, setImageFile] =
    useState(null);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (!exhibition) {
      setForm(initialForm);
      setImageFile(null);
      return;
    }

    setForm({
      title: exhibition.title,
      slug: exhibition.slug,
      location: exhibition.location,
      eventDate:
        exhibition.eventDate?.substring(0, 10) ??
        "",
      description: exhibition.description,
      coverImage: exhibition.coverImage,
    });

    setImageFile(null);
  }, [exhibition]);

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
    if (!imageFile) return form.coverImage;

    const uploaded =
      await ExhibitionService.uploadImage(
        imageFile
      );

    return uploaded.url;
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const coverImage =
        await uploadImage();

      const payload = {
        ...form,
        coverImage,
      };

      if (exhibition) {
        await ExhibitionService.update(
          exhibition.id,
          payload
        );

        toast.success(
          "Exhibition berhasil diperbarui."
        );
      } else {
        await ExhibitionService.create(
          payload
        );

        toast.success(
          "Exhibition berhasil ditambahkan."
        );
      }

      setForm(initialForm);
      setImageFile(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menyimpan Exhibition."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
        {exhibition
          ? "Edit Exhibition"
          : "Create Exhibition"}
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
          <label>Location</label>

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label>Event Date</label>

          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
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
          <label>Cover Image</label>

          {(imageFile ||
            form.coverImage) && (
            <img
              src={
                imageFile
                  ? URL.createObjectURL(
                      imageFile
                    )
                  : `${API_URL}${form.coverImage}`
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
          className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white transition hover:bg-[#9d7a4d] disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : exhibition
            ? "Update"
            : "Create"}
        </button>
      </form>
    </div>
  );
}