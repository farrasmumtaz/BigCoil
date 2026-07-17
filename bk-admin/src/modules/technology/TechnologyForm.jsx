import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import TechnologyService from "./technology.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  type: "COIL",
  title: "",
  subtitle: "",
  description: "",
  image: "",
};

export default function TechnologyForm({
  technology,
  onSuccess,
}) {
  const [form, setForm] = useState(initialForm);

  const [imageFile, setImageFile] = useState(null);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!technology) {
      setForm(initialForm);
      setImageFile(null);
      return;
    }

    setForm({
      type: technology.type,
      title: technology.title,
      subtitle: technology.subtitle ?? "",
      description: technology.description,
      image: technology.image,
    });

    setImageFile(null);
  }, [technology]);

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
      await TechnologyService.uploadImage(imageFile);

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

      if (technology) {
        await TechnologyService.update(
          technology.id,
          payload
        );

        toast.success("Technology berhasil diperbarui.");
      } else {
        await TechnologyService.create(payload);

        toast.success("Technology berhasil ditambahkan.");
      }

      setForm(initialForm);
      setImageFile(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menyimpan Technology.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        {technology
          ? "Edit Technology"
          : "Create Technology"}
      </h1>

      <form
        onSubmit={submit}
        className="space-y-6"
      >

        <div>
          <label>Type</label>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="COIL">
              COIL
            </option>

            <option value="FOAM">
              FOAM
            </option>
          </select>
        </div>

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
                  ? URL.createObjectURL(imageFile)
                  : `${API_URL}${form.image}`
              }
              alt=""
              className="mb-4 h-40 rounded-lg border object-cover"
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
            : technology
            ? "Update"
            : "Create"}
        </button>

      </form>

    </div>
  );
}