import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ExhibitionForm from "./ExhibitionForm";
import ExhibitionTable from "./ExhibitionTable";

import ExhibitionService from "./exhibition.service";

export default function ExhibitionPage() {
  const [exhibitions, setExhibitions] =
    useState([]);

  const [selectedExhibition, setSelectedExhibition] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchExhibitions = async () => {
    try {
      const data =
        await ExhibitionService.getAll();

      setExhibitions(data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil data exhibition.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExhibitions();
  }, []);

  const handleSuccess = () => {
    setSelectedExhibition(null);

    fetchExhibitions();
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus exhibition ini?"
    );

    if (!ok) return;

    try {
      await ExhibitionService.remove(id);
      toast.success(
        "Dealer berhasil dihapus."
      );

      fetchExhibitions();
    } catch (err) {
      console.error(err);
      toast.error(
        "Gagal menghapus Dealer."
      );
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <ExhibitionForm
        exhibition={selectedExhibition}
        onSuccess={handleSuccess}
      />

      <ExhibitionTable
        data={exhibitions}
        onEdit={setSelectedExhibition}
        onDelete={handleDelete}
      />
    </div>
  );
}