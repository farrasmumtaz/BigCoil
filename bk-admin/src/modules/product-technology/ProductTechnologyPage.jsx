import { useEffect, useState } from "react";

import ProductTechnologyForm from "./ProductTechnologyForm";
import ProductTechnologyTable from "./ProductTechnologyTable";

import ProductTechnologyService from "./productTechnology.service";

export default function ProductTechnologyPage() {
  const [technologies, setTechnologies] =
    useState([]);

  const [selectedTechnology, setSelectedTechnology] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const fetchTechnologies = async () => {
    try {
      const data =
        await ProductTechnologyService.getAll();

      setTechnologies(data);
    } catch (err) {
      console.error(err);

      alert(
        "Gagal mengambil Product Technology."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const handleSuccess = () => {
    setSelectedTechnology(null);

    fetchTechnologies();
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
      <ProductTechnologyForm
        productTechnology={
          selectedTechnology
        }
        onSuccess={handleSuccess}
      />

      <ProductTechnologyTable
        productTechnologies={
          technologies
        }
        onEdit={setSelectedTechnology}
        onDelete={fetchTechnologies}
      />
    </div>
  );
}