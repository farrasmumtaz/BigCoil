import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DreamBetterForm from "./DreamBetterForm";
import DreamBetterTable from "./DreamBetterTable";

import DreamBetterService from "./dreamBetter.service";

export default function DreamBetterPage() {
  const [dreamBetters, setDreamBetters] = useState([]);

  const [selectedDreamBetter, setSelectedDreamBetter] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const fetchDreamBetters = async () => {
    try {
      const data =
        await DreamBetterService.getAll();

      setDreamBetters(data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil data Dream Better.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDreamBetters();
  }, []);

  const handleSuccess = () => {
    setSelectedDreamBetter(null);

    fetchDreamBetters();
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus Dream Better ini?"
    );

    if (!ok) return;

    try {
      await DreamBetterService.remove(id);

      toast.success("Dream Better berhasil dihapus.");

      fetchDreamBetters();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menghapus Dream Better.");
    }
  };;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <DreamBetterForm
        dreamBetter={selectedDreamBetter}
        onSuccess={handleSuccess}
      />

      <DreamBetterTable
        data={dreamBetters}
        onEdit={setSelectedDreamBetter}
        onDelete={handleDelete}
      />
    </div>
  );
}