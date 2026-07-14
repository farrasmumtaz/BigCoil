import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";

import ProductSpecificationService from "./productSpecification.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  productId: "",
  label: "",
  value: "",
  icon: "",
  sortOrder: 0,
};

export default function ProductSpecificationForm({
  specification,
  onSuccess,
}) {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState(initialForm);

  const [iconFile, setIconFile] = useState(null);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!specification) {
      setForm(initialForm);
      setIconFile(null);
      return;
    }

    setForm({
      productId: specification.productId,
      label: specification.label,
      value: specification.value,
      icon: specification.icon ?? "",
      sortOrder: specification.sortOrder,
    });

    setIconFile(null);
  }, [specification]);

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

  const handleIcon = (e) => {
    if (!e.target.files?.length) return;

    setIconFile(e.target.files[0]);
  };

  const uploadIcon = async () => {
    if (!iconFile) return form.icon;

    const uploaded =
      await ProductSpecificationService.uploadIcon(
        iconFile,
      );

    return uploaded.url;
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const icon = await uploadIcon();

      const payload = {
        ...form,
        icon,
      };

      if (specification) {
        await ProductSpecificationService.update(
          specification.id,
          payload,
        );

        toast.success(
          "Specification berhasil diperbarui."
        );
      } else {
        await ProductSpecificationService.create(
          payload,
        );

        toast.success(
          "Specification berhasil ditambahkan."
        );
      }

      setForm(initialForm);

      setIconFile(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menyimpan Specification."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        {specification
          ? "Edit Product Specification"
          : "Create Product Specification"}
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
          <label>Label</label>

          <input
            name="label"
            value={form.label}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Value</label>

          <input
            name="value"
            value={form.value}
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

        <div>

          <label>Icon</label>

          {(iconFile || form.icon) && (
            <img
              src={
                iconFile
                  ? URL.createObjectURL(iconFile)
                  : `${API_URL}${form.icon}`
              }
              alt=""
              className="mb-4 h-24 w-24 rounded-lg border object-contain"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleIcon}
          />

        </div>

        <button
          disabled={saving}
          className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
        >
          {saving
            ? "Saving..."
            : specification
            ? "Update"
            : "Create"}
        </button>

      </form>

    </div>
  );
}