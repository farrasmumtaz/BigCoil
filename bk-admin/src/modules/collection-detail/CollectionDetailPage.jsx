import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CollectionDetailForm from "./CollectionDetailForm";
import CollectionDetailTable from "./CollectionDetailTable";

import CollectionDetailService from "./collectionDetail.service";

export default function CollectionDetailPage() {
  const [details, setDetails] = useState([]);

  const [selectedDetail, setSelectedDetail] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchDetails = async () => {
    try {
      const data = await CollectionDetailService.getAll();

      setDetails(data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil data Collection Detail.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleSuccess = () => {
    setSelectedDetail(null);

    fetchDetails();
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus Collection Detail?"
    );

    if (!ok) return;

    try {
      await CollectionDetailService.remove(id);

      fetchDetails();
    } catch (err) {
      console.error(err);

      toast.error("Gagal menghapus Collection Detail.");
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <CollectionDetailForm
        detail={selectedDetail}
        onSuccess={handleSuccess}
      />

      <CollectionDetailTable
        details={details}
        onEdit={setSelectedDetail}
        onDelete={handleDelete}
      />
    </div>
  );
}