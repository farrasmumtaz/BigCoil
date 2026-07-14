import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";

import ProductTechnologyService from "./productTechnology.service";

const initialForm = {
  productId: "",
  technologyId: "",
  sortOrder: 0,
};

export default function ProductTechnologyForm({
  productTechnology,
  onSuccess,
}) {
  const [products, setProducts] = useState([]);

  const [technologies, setTechnologies] =
    useState([]);

  const [form, setForm] = useState(initialForm);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchTechnologies();
  }, []);

  useEffect(() => {
    if (!productTechnology) {
      setForm(initialForm);
      return;
    }

    setForm({
      productId: productTechnology.productId,
      technologyId:
        productTechnology.technologyId,
      sortOrder:
        productTechnology.sortOrder ?? 0,
    });
  }, [productTechnology]);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/product");

      setProducts(res.data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil Product.");
    }
  };

  const fetchTechnologies = async () => {
    try {
      const res = await api.get("/technology");

      setTechnologies(res.data);
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal mengambil Technology."
      );
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "productId" ||
        e.target.name ===
          "technologyId" ||
        e.target.name === "sortOrder"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      if (productTechnology) {
        await ProductTechnologyService.update(
          productTechnology.id,
          form,
        );

        toast.success(
          "Product Technology berhasil diperbarui."
        );
      } else {
        await ProductTechnologyService.create(
          form,
        );

        toast.success(
          "Product Technology berhasil ditambahkan."
        );
      }

      setForm(initialForm);

      onSuccess();
    } catch (err) {
      console.error(err);

      if (
        err.response?.data?.message?.includes(
          "Unique",
        )
      ) {
        toast.error(
          "Technology sudah dipakai oleh Product ini."
        );
      } else {
        toast.error(
          "Gagal menyimpan Product Technology."
        );
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        {productTechnology
          ? "Edit Product Technology"
          : "Create Product Technology"}
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

          <label>Technology</label>

          <select
            name="technologyId"
            value={form.technologyId}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">
              Choose Technology
            </option>

            {technologies.map(
              (technology) => (
                <option
                  key={technology.id}
                  value={technology.id}
                >
                  {technology.title}
                </option>
              ),
            )}
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

        <button
          disabled={saving}
          className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
        >
          {saving
            ? "Saving..."
            : productTechnology
              ? "Update"
              : "Create"}
        </button>

      </form>

    </div>
  );
}