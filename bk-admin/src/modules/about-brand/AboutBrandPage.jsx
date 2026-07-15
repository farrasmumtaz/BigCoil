import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AboutBrandForm from "./AboutBrandForm";
import AboutBrandTable from "./AboutBrandTable";

import AboutBrandService from "./aboutBrand.service";

export default function AboutBrandPage() {
  const [brands, setBrands] =
    useState([]);

  const [selectedBrand, setSelectedBrand] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchBrands = async () => {
    try {
      const data =
        await AboutBrandService.getAll();

      setBrands(data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleSuccess = () => {
    setSelectedBrand(null);

    fetchBrands();
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus data ini?"
    );

    if (!ok) return;

    try {
      await AboutBrandService.remove(id);

      fetchBrands();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <AboutBrandForm
        about={selectedBrand}
        onSuccess={handleSuccess}
      />

      <AboutBrandTable
        data={brands}
        onEdit={setSelectedBrand}
        onDelete={handleDelete}
      />
    </div>
  );
}