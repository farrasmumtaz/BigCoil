import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import DealerService from "./dealer.service";

const initialForm = {
  name: "",
  island: "",
  province: "",
  city: "",
  address: "",
  phone: "",
  mapsUrl: "",
};

// Bikin key unik case-insensitive tapi tetap simpan label asli (Title Case)
function toTitleCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function DealerForm({ dealer, onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);

  // Semua dealer, dipakai untuk membangun daftar pilihan island/province/city
  const [allDealers, setAllDealers] = useState([]);
  const [loadingOptions, setLoadingOptions] = useState(true);

  useEffect(() => {
    DealerService.getAll()
      .then((data) => setAllDealers(data ?? []))
      .catch((err) => {
        console.error(err);
        toast.error("Gagal memuat data pilihan lokasi.");
      })
      .finally(() => setLoadingOptions(false));
  }, []);

  useEffect(() => {
    if (!dealer) {
      setForm(initialForm);
      return;
    }

    setForm({
      name: dealer.name,
      island: dealer.island,
      province: dealer.province,
      city: dealer.city,
      address: dealer.address,
      phone: dealer.phone ?? "",
      mapsUrl: dealer.mapsUrl ?? "",
    });
  }, [dealer]);

  // --- Bangun daftar opsi unik (case-insensitive) dari data dealer ---

  const islandOptions = useMemo(() => {
    const map = new Map(); // key: lowercase, value: label Title Case
    allDealers.forEach((d) => {
      if (!d.island) return;
      const key = d.island.trim().toLowerCase();
      if (!map.has(key)) map.set(key, toTitleCase(d.island));
    });
    return Array.from(map.values()).sort();
  }, [allDealers]);

  const provinceOptions = useMemo(() => {
    const map = new Map();
    allDealers.forEach((d) => {
      if (!d.province) return;
      // kalau island sudah dipilih, filter province sesuai island itu
      if (
        form.island &&
        d.island?.trim().toLowerCase() !== form.island.trim().toLowerCase()
      ) {
        return;
      }
      const key = d.province.trim().toLowerCase();
      if (!map.has(key)) map.set(key, toTitleCase(d.province));
    });
    return Array.from(map.values()).sort();
  }, [allDealers, form.island]);

  const cityOptions = useMemo(() => {
    const map = new Map();
    allDealers.forEach((d) => {
      if (!d.city) return;
      if (
        form.province &&
        d.province?.trim().toLowerCase() !== form.province.trim().toLowerCase()
      ) {
        return;
      }
      const key = d.city.trim().toLowerCase();
      if (!map.has(key)) map.set(key, toTitleCase(d.city));
    });
    return Array.from(map.values()).sort();
  }, [allDealers, form.province]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const next = { ...prev, [name]: value };

      // reset field turunan kalau parent-nya berubah
      if (name === "island") {
        next.province = "";
        next.city = "";
      }
      if (name === "province") {
        next.city = "";
      }

      return next;
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      // normalisasi casing sebelum kirim, biar konsisten di DB
      const payload = {
        ...form,
        island: toTitleCase(form.island),
        province: toTitleCase(form.province),
        city: toTitleCase(form.city),
      };

      if (dealer) {
        await DealerService.update(dealer.id, payload);
        toast.success("Dealer berhasil diperbarui.");
      } else {
        await DealerService.create(payload);
        toast.success("Dealer berhasil ditambahkan.");
      }

      setForm(initialForm);
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Gagal menyimpan dealer.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
        {dealer ? "Edit Dealer" : "Create Dealer"}
      </h1>

      <form onSubmit={submit} className="space-y-6">
        <div>
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div>
            <label>Island</label>
            <input
              list="island-list"
              name="island"
              value={form.island}
              onChange={handleChange}
              placeholder={loadingOptions ? "Memuat..." : "Pilih atau ketik island"}
              className="mt-2 w-full rounded-lg border p-3"
              autoComplete="off"
              required
            />
            <datalist id="island-list">
              {islandOptions.map((i) => (
                <option key={i} value={i} />
              ))}
            </datalist>
          </div>

          <div>
            <label>Province</label>
            <input
              list="province-list"
              name="province"
              value={form.province}
              onChange={handleChange}
              placeholder={loadingOptions ? "Memuat..." : "Pilih atau ketik province"}
              className="mt-2 w-full rounded-lg border p-3"
              autoComplete="off"
              required
            />
            <datalist id="province-list">
              {provinceOptions.map((p) => (
                <option key={p} value={p} />
              ))}
            </datalist>
          </div>

          <div>
            <label>City</label>
            <input
              list="city-list"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder={loadingOptions ? "Memuat..." : "Pilih atau ketik city"}
              className="mt-2 w-full rounded-lg border p-3"
              autoComplete="off"
              required
            />
            <datalist id="city-list">
              {cityOptions.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
        </div>

        <div>
          <label>Address</label>
          <textarea
            rows={5}
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label>Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label>Google Maps URL</label>
            <input
              name="mapsUrl"
              value={form.mapsUrl}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>
        </div>

        <button
          disabled={saving}
          className="rounded-lg bg-[#B8935F] px-8 py-3 font-semibold text-white transition hover:bg-[#9C7642] disabled:opacity-50"
        >
          {saving ? "Saving..." : dealer ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}