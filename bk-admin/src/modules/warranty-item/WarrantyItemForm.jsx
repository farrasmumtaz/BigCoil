import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import WarrantyItemService from "./warranty-item.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  warrantyId: 1,
  title: "",
  description: "",
  image: "",
  sortOrder: 0,
};

export default function WarrantyItemForm({
  item,
  onSuccess,
}) {
  const [form, setForm] =
    useState(initialForm);

  const [imageFile, setImageFile] =
    useState(null);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (!item) {
      setForm(initialForm);
      setImageFile(null);
      return;
    }

    setForm({
      warrantyId: item.warrantyId ?? 1,
      title: item.title ?? "",
      description:
        item.description ?? "",
      image: item.image ?? "",
      sortOrder:
        item.sortOrder ?? 0,
    });

    setImageFile(null);
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "sortOrder"
          ? Number(value)
          : value,
    }));
  };

  const handleImage = (e) => {
    if (!e.target.files?.length) return;

    setImageFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!imageFile) return form.image;

    const uploaded =
      await WarrantyItemService.uploadImage(
        imageFile
      );

    return uploaded.url;
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const image =
        await uploadImage();

      const payload = {
        ...form,
        image,
      };

      if (item?.id) {
        await WarrantyItemService.update(
          item.id,
          payload
        );

        toast.success(
          "Warranty item berhasil diperbarui."
        );
      } else {
        await WarrantyItemService.create(
          payload
        );

        toast.success(
          "Warranty item berhasil ditambahkan."
        );
      }

      setForm(initialForm);
      setImageFile(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menyimpan warranty item."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
        {item?.id
          ? "Edit Warranty Item"
          : "Create Warranty Item"}
      </h1>

      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div>
          <label className="mb-2 block font-medium">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            rows={6}
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Sort Order
          </label>

          <input
            type="number"
            name="sortOrder"
            value={form.sortOrder}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            min={0}
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Image
          </label>

          {(imageFile ||
            form.image) && (
            <img
              src={
                imageFile
                  ? URL.createObjectURL(
                      imageFile
                    )
                  : `${API_URL}${form.image}`
              }
              alt=""
              className="mb-4 h-56 w-full rounded-lg border object-cover"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        <div className="flex justify-end">
          <button
            disabled={saving}
            className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
          >
            {saving
              ? "Saving..."
              : item?.id
              ? "Update"
              : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}