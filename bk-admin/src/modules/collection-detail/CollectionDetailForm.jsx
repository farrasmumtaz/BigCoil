import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";

import CollectionDetailService from "./collectionDetail.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  collectionId: "",
  heroTitle: "",
  heroDescription: "",
  heroImage: "",
};

export default function CollectionDetailForm({
  detail,
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
    if (!detail) {
      setForm(initialForm);
      setImage(null);
      return;
    }

    setForm({
      collectionId: detail.collectionId,
      heroTitle: detail.heroTitle,
      heroDescription: detail.heroDescription,
      heroImage: detail.heroImage,
    });

    setImage(null);
  }, [detail]);

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
      await CollectionDetailService.uploadImage(
        image,
      );

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

      if (detail) {
        await CollectionDetailService.update(
          detail.id,
          payload,
        );

        toast.success("Collection Detail berhasil diperbarui.");
      } else {
        await CollectionDetailService.create(
          payload,
        );

        toast.success("Collection Detail berhasil ditambahkan.");
      }

      setForm(initialForm);

      setImage(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menyimpan Collection Detail.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        {detail
          ? "Edit Collection Detail"
          : "Create Collection Detail"}
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
          <label>Hero Title</label>

          <input
            name="heroTitle"
            value={form.heroTitle}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Hero Description</label>

          <textarea
            rows={8}
            name="heroDescription"
            value={form.heroDescription}
            onChange={handleChange}
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
              className="mb-4 h-52 rounded-xl object-cover"
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
            : detail
            ? "Update"
            : "Create"}
        </button>
      </form>

    </div>
  );
}