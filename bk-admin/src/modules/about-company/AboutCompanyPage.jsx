import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AboutCompanyForm from "./AboutCompanyForm";
import AboutCompanyTable from "./AboutCompanyTable";

import AboutCompanyService from "./aboutCompany.service";

export default function AboutCompanyPage() {
  const [companies, setCompanies] =
    useState([]);

  const [selectedCompany, setSelectedCompany] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchCompanies = async () => {
    try {
      const data =
        await AboutCompanyService.getAll();

      setCompanies(data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil data About Company.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleSuccess = () => {
    setSelectedCompany(null);

    fetchCompanies();
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus About Company?"
    );

    if (!ok) return;

    try {
      await AboutCompanyService.remove(id);

      fetchCompanies();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menghapus About Company.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <AboutCompanyForm
        about={selectedCompany}
        onSuccess={handleSuccess}
      />

      <AboutCompanyTable
        data={companies}
        onEdit={setSelectedCompany}
        onDelete={handleDelete}
      />
    </div>
  );
}