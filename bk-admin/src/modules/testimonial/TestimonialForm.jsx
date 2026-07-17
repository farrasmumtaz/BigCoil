import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import TestimonialService from "./testimonial.service";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  image: "",
};

export default function TestimonialForm({
  testimonial,
  onSuccess,
}) {
  const [form, setForm] = useState(initialForm);

  const [imageFile, setImageFile] =
    useState(null);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (!testimonial) {
      setForm(initialForm);
      setImageFile(null);
      return;
    }

    setForm({
      image: testimonial.image,
    });

    setImageFile(null);
  }, [testimonial]);

  const handleImage = (e) => {
    if (!e.target.files?.length) return;

    setImageFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!imageFile) return form.image;

    const uploaded =
      await TestimonialService.uploadImage(
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
        image,
      };

      if (testimonial) {
        await TestimonialService.update(
          testimonial.id,
          payload
        );

        toast.success("Testimonial berhasil diperbarui.");
      } else {
        await TestimonialService.create(
          payload
        );

        toast.success("Testimonial berhasil ditambahkan.");
      }

      setForm(initialForm);
      setImageFile(null);

      onSuccess();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menyimpan testimonial.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
        {testimonial
          ? "Edit Testimonial"
          : "Create Testimonial"}
      </h1>

      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div>
          <label>Image</label>

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
              className="mb-4 h-56 rounded-lg border object-cover"
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
            : testimonial
            ? "Update"
            : "Create"}
        </button>
      </form>
    </div>
  );
}