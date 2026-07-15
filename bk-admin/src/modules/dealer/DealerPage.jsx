import { useEffect, useState } from "react";

import DealerForm from "./DealerForm";
import DealerTable from "./DealerTable";

import DealerService from "./dealer.service";
import toast from "react-hot-toast";

export default function DealerPage() {
  const [dealers, setDealers] =
    useState([]);

  const [selectedDealer, setSelectedDealer] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchDealers = async () => {
    try {
      const data =
        await DealerService.getAll();

      setDealers(data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil data dealer.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDealers();
  }, []);

  const handleSuccess = () => {
    setSelectedDealer(null);

    fetchDealers();
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus dealer ini?"
    );

    if (!ok) return;

    try {
      await DealerService.remove(id);

      fetchDealers();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <DealerForm
        dealer={selectedDealer}
        onSuccess={handleSuccess}
      />

      <DealerTable
        data={dealers}
        onEdit={setSelectedDealer}
        onDelete={handleDelete}
      />
    </div>
  );
}