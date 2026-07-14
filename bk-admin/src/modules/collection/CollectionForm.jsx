import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";
import CollectionService from "./collection.service";

const initialForm = {
  title: "",
  slug: "",
  categoryId: "",
  description: "",
  coverImage: "",
};

export default function CollectionForm({
  collection,
  onSuccess,
}) {
  const [form, setForm] = useState(initialForm);

  const [categories, setCategories] = useState([]);

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (collection) {
      setForm({
        title: collection.title,
        slug: collection.slug,
        categoryId: collection.categoryId,
        description: collection.description,
        coverImage: collection.coverImage,
      });

      setImage(null);
    } else {
      setForm(initialForm);
      setImage(null);
    }
  }, [collection]);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/collection-category");

      setCategories(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengambil kategori.");
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "categoryId"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const handleImage = (e) => {
    if (!e.target.files?.length) return;

    setImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!image) return form.coverImage;

    const fd = new FormData();

    fd.append("file", image);

    const res = await api.post(
      "/upload/collection",
      fd
    );

    return res.data.url;
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const coverImage = await uploadImage();

      const payload = {
        ...form,
        coverImage,
      };

      if (collection) {
        await CollectionService.update(
          collection.id,
          payload
        );

        toast.success("Collection berhasil diperbarui.");
      } else {
        await CollectionService.create(payload);

        toast.success("Collection berhasil ditambahkan.");
      }

      setForm(initialForm);

      setImage(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menyimpan collection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-semibold">
        {collection
          ? "Edit Collection"
          : "Tambah Collection"}
      </h2>

      <form
        onSubmit={submit}
        className="space-y-5"
      >
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full rounded border p-3"
        />

        <input
          name="slug"
          placeholder="Slug"
          value={form.slug}
          onChange={handleChange}
          className="w-full rounded border p-3"
        />

        <select
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          className="w-full rounded border p-3"
        >
          <option value="">
            Pilih Category
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <textarea
          rows={6}
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full rounded border p-3"
        />

        {(image || form.coverImage) && (
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : `${import.meta.env.VITE_API_URL}${form.coverImage}`
            }
            alt=""
            className="h-52 rounded object-cover"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

        <button
          disabled={loading}
          className="rounded bg-amber-700 px-6 py-3 text-white"
        >
          {loading
            ? "Loading..."
            : collection
            ? "Update"
            : "Create"}
        </button>
      </form>
    </div>
  );
}