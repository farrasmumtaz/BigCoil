import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DreamBetterService from "../dream-better/dreamBetter.service";
import DreamBetterSectionService from "./dreamBetterSection.service";

const initialForm = {
  dreamBetterId: "",
  title: "",
  content: "",
  order: 1,
};

export default function DreamBetterSectionForm({
  section,
  onSuccess,
}) {
  const [form, setForm] = useState(initialForm);

  const [dreamBetters, setDreamBetters] =
    useState([]);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    DreamBetterService.getAll().then(setDreamBetters);
  }, []);

  useEffect(() => {
    if (!section) {
      setForm(initialForm);
      return;
    }

    setForm({
      dreamBetterId: section.dreamBetterId,
      title: section.title,
      content: section.content,
      order: section.order,
    });
  }, [section]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "dreamBetterId" ||
        e.target.name === "order"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      if (section) {
        await DreamBetterSectionService.update(
          section.id,
          form
        );

        toast.success("Section berhasil diperbarui.");
      } else {
        await DreamBetterSectionService.create(
          form
        );

        toast.success("Section berhasil ditambahkan.");
      }

      setForm(initialForm);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menyimpan section.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        {section
          ? "Edit Dream Better Section"
          : "Create Dream Better Section"}
      </h1>

      <form
        onSubmit={submit}
        className="space-y-6"
      >

        <div>
          <label>Dream Better</label>

          <select
            name="dreamBetterId"
            value={form.dreamBetterId}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">
              Choose Dream Better
            </option>

            {dreamBetters.map((item) => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.title}
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
          <label>Content</label>

          <textarea
            rows={7}
            name="content"
            value={form.content}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Order</label>

          <input
            type="number"
            name="order"
            value={form.order}
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
            : section
            ? "Update"
            : "Create"}
        </button>

      </form>

    </div>
  );
}