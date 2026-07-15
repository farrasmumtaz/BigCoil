import { useEffect, useState } from "react";

import CompanyService from "./company.service";
import { uploadApi } from "../../services/upload";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

export default function CompanyForm({
  company,
  onSuccess,
}) {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    address: "",
    whatsapp: "",
    email: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    shopee: "",
    tokopedia: "",
  });

  const [logo, setLogo] = useState(null);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!company) return;

    setForm({
      name: company.name ?? "",
      tagline: company.tagline ?? "",
      address: company.address ?? "",
      whatsapp: company.whatsapp ?? "",
      email: company.email ?? "",
      facebook: company.facebook ?? "",
      instagram: company.instagram ?? "",
      tiktok: company.tiktok ?? "",
      shopee: company.shopee ?? "",
      tokopedia: company.tokopedia ?? "",
    });
  }, [company]);

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
      let payload = {
        ...form,
      };

      if (logo) {
        const uploaded = await uploadApi.upload(
          "company",
          logo,
        );

        payload.logo = uploaded.url;
      }

      await CompanyService.updateCompany(
        company.id,
        payload,
      );

      toast.success("Company berhasil diperbarui.");

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
          Company
        </h1>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label>Company Name</label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Tagline</label>

            <input
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div className="md:col-span-2">
            <label>Address</label>

            <textarea
              rows={4}
              name="address"
              value={form.address}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Whatsapp</label>

            <input
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Email</label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Facebook</label>

            <input
              name="facebook"
              value={form.facebook}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Instagram</label>

            <input
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Tiktok</label>

            <input
              name="tiktok"
              value={form.tiktok}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Shopee</label>

            <input
              name="shopee"
              value={form.shopee}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Tokopedia</label>

            <input
              name="tokopedia"
              value={form.tokopedia}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div className="md:col-span-2">

            <label>Logo</label>

            <img
              src={`${API_URL}${company.logo}`}
              className="mb-4 h-24 rounded"
            />

            <input
              type="file"
              onChange={(e) =>
                setLogo(e.target.files[0])
              }
            />

          </div>

        </div>

        <button
          disabled={saving}
          className="mt-8 rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

      </div>
    </form>
  );
}