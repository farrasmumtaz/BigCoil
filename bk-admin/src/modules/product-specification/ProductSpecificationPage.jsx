import { useEffect, useState } from "react";

import ProductSpecificationForm from "./ProductSpecificationForm";
import ProductSpecificationTable from "./ProductSpecificationTable";

import ProductSpecificationService from "./productSpecification.service";

export default function ProductSpecificationPage() {
  const [specifications, setSpecifications] =
    useState([]);

  const [selectedSpecification, setSelectedSpecification] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const fetchSpecifications = async () => {
    try {
      const data =
        await ProductSpecificationService.getAll();

      setSpecifications(data);
    } catch (err) {
      console.error(err);

      alert("Gagal mengambil Product Specification.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpecifications();
  }, []);

  const handleSuccess = () => {
    setSelectedSpecification(null);

    fetchSpecifications();
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
      <ProductSpecificationForm
        specification={selectedSpecification}
        onSuccess={handleSuccess}
      />

      <ProductSpecificationTable
        specifications={specifications}
        onEdit={setSelectedSpecification}
        onDelete={fetchSpecifications}
      />
    </div>
  );
}