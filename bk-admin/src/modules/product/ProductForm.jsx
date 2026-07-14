import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";

import ProductService from "./product.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  collectionId: "",
  title: "",
  slug: "",
  shortDescription: "",
  heroImage: "",
  videoUrl: "",
};

export default function ProductForm({
  product,
  onSuccess,
}) {
  const [collections, setCollections] = useState([]);

  const [form, setForm] = useState(initialForm);

  const [image, setImage] = useState(null);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchCollections();
  }, []);

  useEffect(() => {
    if (!product) {
      setForm(initialForm);
      setImage(null);
      return;
    }

    setForm({
      collectionId: product.collectionId,
      title: product.title,
      slug: product.slug,
      shortDescription: product.shortDescription,
      heroImage: product.heroImage,
      videoUrl: product.videoUrl ?? "",
    });

    setImage(null);
  }, [product]);

  const fetchCollections = async () => {
    try {
      const res = await api.get("/collection");

      setCollections(res.data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil Collection.");
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "collectionId"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const handleImage = (e) => {
    if (!e.target.files?.length) return;

    setImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!image) return form.heroImage;

    const uploaded =
      await ProductService.uploadImage(image);

    return uploaded.url;
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const heroImage =
        await uploadImage();

      const payload = {
        ...form,
        heroImage,
      };

      if (product) {
        await ProductService.update(
          product.id,
          payload,
        );

        toast.success(
          "Product berhasil diperbarui."
        );
      } else {
        await ProductService.create(
          payload,
        );

        toast.success(
          "Product berhasil ditambahkan."
        );
      }

      setForm(initialForm);

      setImage(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menyimpan Product."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        {product
          ? "Edit Product"
          : "Create Product"}
      </h1>

      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div>
          <label>Collection</label>

          <select
            name="collectionId"
            value={form.collectionId}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">
              Choose Collection
            </option>

            {collections.map((collection) => (
              <option
                key={collection.id}
                value={collection.id}
              >
                {collection.title}
              </option>
            ))}
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
          <label>Slug</label>

          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Short Description</label>

          <textarea
            rows={6}
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Youtube URL</label>

          <input
            name="videoUrl"
            value={form.videoUrl}
            onChange={handleChange}
            placeholder="https://youtube.com/..."
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Hero Image</label>

          {(image || form.heroImage) && (
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : `${API_URL}${form.heroImage}`
              }
              className="mb-4 h-56 rounded-xl object-cover"
              alt=""
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
            : product
            ? "Update"
            : "Create"}
        </button>
      </form>

    </div>
  );
}