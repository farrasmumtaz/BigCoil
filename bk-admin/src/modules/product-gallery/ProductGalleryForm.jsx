import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";

import ProductGalleryService from "./productGallery.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  productId: "",
  image: "",
  sortOrder: 0,
};

export default function ProductGalleryForm({
  gallery,
  onSuccess,
}) {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState(initialForm);

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!gallery) {
      setForm(initialForm);
      setSelectedImage(null);
      return;
    }

    setForm({
      productId: gallery.productId,
      image: gallery.image,
      sortOrder: gallery.sortOrder,
    });

    setSelectedImage(null);
  }, [gallery]);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/product");

      setProducts(res.data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil Product.");
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "productId" ||
        e.target.name === "sortOrder"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const handleImage = (e) => {
    if (!e.target.files?.length) return;

    setSelectedImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!selectedImage) return form.image;

    const uploaded =
      await ProductGalleryService.uploadImage(
        selectedImage,
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

      if (gallery) {
        await ProductGalleryService.update(
          gallery.id,
          payload,
        );

        toast.success(
          "Gallery berhasil diperbarui."
        );
      } else {
        await ProductGalleryService.create(
          payload,
        );

        toast.success(
          "Gallery berhasil ditambahkan."
        );
      }

      setForm(initialForm);

      setSelectedImage(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menyimpan Gallery.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        {gallery
          ? "Edit Product Gallery"
          : "Create Product Gallery"}
      </h1>

      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div>

          <label>Product</label>

          <select
            name="productId"
            value={form.productId}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">
              Choose Product
            </option>

            {products.map((product) => (
              <option
                key={product.id}
                value={product.id}
              >
                {product.title}
              </option>
            ))}

          </select>

        </div>

        <div>

          <label>Sort Order</label>

          <input
            type="number"
            name="sortOrder"
            value={form.sortOrder}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label>Gallery Image</label>

          {(selectedImage || form.image) && (
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(
                      selectedImage,
                    )
                  : `${API_URL}${form.image}`
              }
              alt=""
              className="mb-4 h-56 rounded-xl object-cover"
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
            : gallery
            ? "Update"
            : "Create"}
        </button>

      </form>

    </div>
  );
}