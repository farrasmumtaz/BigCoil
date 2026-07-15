import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AboutCompanyService from "./aboutCompany.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  title: "",
  subtitle: "",
  description: "",
  image: "",
};

export default function AboutCompanyForm({
  about,
  onSuccess,
}) {
  const [form, setForm] =
    useState(initialForm);

  const [imageFile, setImageFile] =
    useState(null);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (!about) {
      setForm(initialForm);
      setImageFile(null);
      return;
    }

    setForm({
      title: about.title,
      subtitle: about.subtitle,
      description: about.description,
      image: about.image,
    });

    setImageFile(null);
  }, [about]);

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
    if (!imageFile) return form.image;

    const uploaded =
      await AboutCompanyService.uploadImage(
        imageFile
      );

    return uploaded.url;
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const image = await uploadImage();

      const payload = {
        ...form,
        image,
      };

      if (about) {
        await AboutCompanyService.update(
          about.id,
          payload
        );

        toast.success(
          "About Company berhasil diperbarui."
        );
      } else {
        await AboutCompanyService.create(
          payload
        );

        toast.success(
          "About Company berhasil ditambahkan."
        );
      }

      setForm(initialForm);
      setImageFile(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menyimpan About Company."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
        {about
          ? "Edit About Company"
          : "Create About Company"}
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
          />
        </div>

        <div>
          <label>Subtitle</label>

          <input
            name="subtitle"
            value={form.subtitle}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
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
          />
        </div>

        <div>
          <label>Image</label>

          {(imageFile || form.image) && (
            <img
              src={
                imageFile
                  ? URL.createObjectURL(
                      imageFile
                    )
                  : `${API_URL}${form.image}`
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
          className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
        >
          {saving
            ? "Saving..."
            : about
            ? "Update"
            : "Create"}
        </button>
      </form>
    </div>
  );
}