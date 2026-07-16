import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ServiceCenterForm from "./ServiceCenterForm";
import ServiceCenterTable from "./ServiceCenterTable";

import ServiceCenterService from "./serviceCenter.service";

export default function ServiceCenterPage() {
  const [serviceCenters, setServiceCenters] = useState([]);

  const [selectedServiceCenter, setSelectedServiceCenter] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const fetchServiceCenters = async () => {
    try {
      const data =
        await ServiceCenterService.getAll();

      setServiceCenters(data);
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal mengambil Service Center."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceCenters();
  }, []);

  const handleSuccess = () => {
    setSelectedServiceCenter(null);

    fetchServiceCenters();
  };

  const handleDelete = async (id) => {
    try {
      await ServiceCenterService.remove(id);

      toast.success(
        "Service Center berhasil dihapus."
      );

      fetchServiceCenters();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menghapus Service Center."
      );
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <ServiceCenterForm
        serviceCenter={selectedServiceCenter}
        onSuccess={handleSuccess}
      />

      <ServiceCenterTable
        data={serviceCenters}
        onEdit={setSelectedServiceCenter}
        onDelete={handleDelete}
      />
    </div>
  );
}