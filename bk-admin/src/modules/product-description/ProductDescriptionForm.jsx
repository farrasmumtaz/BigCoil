import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";

import ProductDescriptionService from "./productDescription.service";

const initialForm = {
  productId: "",
  title: "",
  description: "",
  sortOrder: 0,
};

export default function ProductDescriptionForm({
  description,
  onSuccess,
}) {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState(initialForm);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!description) {
      setForm(initialForm);
      return;
    }

    setForm({
      productId: description.productId,
      title: description.title,
      description: description.description,
      sortOrder: description.sortOrder,
    });
  }, [description]);

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

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      if (description) {
        await ProductDescriptionService.update(
          description.id,
          form,
        );

        toast.success(
          "Description berhasil diperbarui."
        );
      } else {
        await ProductDescriptionService.create(
          form,
        );

        toast.success(
          "Description berhasil ditambahkan."
        );
      }

      setForm(initialForm);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menyimpan Description."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        {description
          ? "Edit Product Description"
          : "Create Product Description"}
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
          <label>Title</label>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Description</label>

          <textarea
            rows={8}
            name="description"
            value={form.description}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
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

        <button
          disabled={saving}
          className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
        >
          {saving
            ? "Saving..."
            : description
            ? "Update"
            : "Create"}
        </button>

      </form>

    </div>
  );
}