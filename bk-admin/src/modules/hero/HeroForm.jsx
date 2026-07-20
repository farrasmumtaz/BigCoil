import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HeroService from "./hero.service";

const API_URL = import.meta.env.VITE_API_URL;

export default function HeroForm({
  hero,
  onSuccess,
}) {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    buttonText: "",
    buttonLink: "",
  });

  const [image, setImage] = useState(null);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!hero) return;

    setForm({
      title: hero.title ?? "",
      subtitle: hero.subtitle ?? "",
      description: hero.description ?? "",
      buttonText: hero.buttonText ?? "",
      buttonLink: hero.buttonLink ?? "",
    });
  }, [hero]);

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
      let imageUrl = hero.image;

      if (image) {
        const uploaded = await HeroService.uploadImage(image);

        imageUrl = uploaded.url;
      }

      await HeroService.updateHero(hero.id, {
        ...form,
        image: imageUrl,
      });

      toast.success("Hero berhasil diperbarui.");

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menyimpan.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="space-y-6"
    >
      <div className="rounded-xl bg-white p-8 shadow">
        <h1 className="mb-8 text-3xl font-bold">
          Hero
        </h1>

        <div className="grid gap-6">

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
            <label>Subtitle</label>

            <input
              name="subtitle"
              value={form.subtitle}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Description</label>

            <textarea
              rows={5}
              name="description"
              value={form.description}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Button Text</label>

            <input
              name="buttonText"
              value={form.buttonText}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Button Link</label>

            <input
              name="buttonLink"
              value={form.buttonLink}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Current Image</label>

            {hero.image && (
              <img
                src={`${API_URL}${hero.image}`}
                alt="Hero"
                className="mb-4 h-48 rounded-lg border object-cover"
              />
            )}

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

        </div>

        <button
          type="submit"
          disabled={saving}
          className="mt-8 rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white transition hover:bg-[#9D7A46]"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}