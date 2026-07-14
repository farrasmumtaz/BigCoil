import { useEffect, useState } from "react";

import CollectionCategoryService from "./collection-category.service";

export default function CollectionCategoryForm({
  category,
  onSuccess,
}) {
  const [form, setForm] = useState({
    name: "",
    slug: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (category) {
      setForm({
        name: category.name,
        slug: category.slug,
      });
    } else {
      setForm({
        name: "",
        slug: "",
      });
    }
  }, [category]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    setSaving(true);

    try {
      if (category) {
        await CollectionCategoryService.update(
          category.id,
          form,
        );
      } else {
        await CollectionCategoryService.create(form);
      }

      onSuccess();
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-xl bg-white p-8 shadow"
    >
      <h1 className="mb-8 text-3xl font-bold">
        Collection Category
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label>Name</label>

          <input
            name="name"
            value={form.name}
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
      </div>

      <button
        className="mt-8 rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
        disabled={saving}
      >
        {saving
          ? "Saving..."
          : category
          ? "Update"
          : "Create"}
      </button>
    </form>
  );
}