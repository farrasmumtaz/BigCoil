import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ArticleService from "./article.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  title: "",
  description: "",
  image: "",
  category: "",
  publishDate: "",
  sortOrder: 0,
  link: "",
};

export default function ArticleForm({
  article,
  onSuccess,
}) {
  const [form, setForm] = useState(initialForm);

  const [imageFile, setImageFile] =
    useState(null);

  const [saving, setSaving] =
    useState(false);

  const [categories, setCategories] =
    useState([]);

  const [newCategory, setNewCategory] =
    useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!article) {
      setForm(initialForm);
      setImageFile(null);
      setNewCategory("");
      return;
    }

    setForm({
      title: article.title,
      description: article.description,
      image: article.image,
      category: article.category,
      publishDate:
        article.publishDate?.slice(0, 10),
      sortOrder: article.sortOrder ?? 0,
      link: article.link,
    });

    setImageFile(null);
    setNewCategory("");
  }, [article]);

  const fetchCategories = async () => {
    try {
      const data =
        await ArticleService.getAll();

      const uniqueCategories = [
        ...new Set(
          data
            .map((item) => item.category)
            .filter(Boolean)
        ),
      ];

      setCategories(uniqueCategories);
    } catch (err) {
      console.error(err);
    }
  };

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
      await ArticleService.uploadImage(
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
        category:
          form.category === "__new__"
            ? newCategory
            : form.category,
        sortOrder: Number(form.sortOrder),
      };

      if (article) {
        await ArticleService.update(
          article.id,
          payload
        );

        toast.success(
          "Article berhasil diperbarui."
        );
      } else {
        await ArticleService.create(
          payload
        );

        toast.success(
          "Article berhasil ditambahkan."
        );
      }

      setForm(initialForm);
      setImageFile(null);
      setNewCategory("");

      await fetchCategories();

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menyimpan Article."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
        {article
          ? "Edit Article"
          : "Create Article"}
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
          <label>Category</label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">
              Pilih Category
            </option>

            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}

            <option value="__new__">
              + Tambah Category Baru
            </option>
          </select>

          {form.category === "__new__" && (
            <div className="mt-4">
              <label>Category Baru</label>

              <input
                value={newCategory}
                onChange={(e) =>
                  setNewCategory(
                    e.target.value
                  )
                }
                placeholder="Masukkan nama category"
                className="mt-2 w-full rounded-lg border p-3"
              />
            </div>
          )}
        </div>

        <div>
          <label>Publish Date</label>

          <input
            type="date"
            name="publishDate"
            value={form.publishDate}
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
          <label>Link</label>

          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            placeholder="https://..."
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
            : article
            ? "Update"
            : "Create"}
        </button>
      </form>
    </div>
  );
}