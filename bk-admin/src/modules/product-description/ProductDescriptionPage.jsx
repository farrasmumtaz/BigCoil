import { useEffect, useState } from "react";

import ProductDescriptionForm from "./ProductDescriptionForm";
import ProductDescriptionTable from "./ProductDescriptionTable";

import ProductDescriptionService from "./productDescription.service";

export default function ProductDescriptionPage() {
  const [descriptions, setDescriptions] =
    useState([]);

  const [selectedDescription, setSelectedDescription] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const fetchDescriptions = async () => {
    try {
      const data =
        await ProductDescriptionService.getAll();

      setDescriptions(data);
    } catch (err) {
      console.error(err);

      alert("Gagal mengambil Product Description.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDescriptions();
  }, []);

  const handleSuccess = () => {
    setSelectedDescription(null);

    fetchDescriptions();
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

      <ProductDescriptionForm
        description={selectedDescription}
        onSuccess={handleSuccess}
      />

      <ProductDescriptionTable
        descriptions={descriptions}
        onEdit={setSelectedDescription}
        onDelete={fetchDescriptions}
      />

    </div>
  );
}