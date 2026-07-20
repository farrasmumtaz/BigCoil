import { useEffect, useState } from "react";

import WarrantyForm from "./WarrantyForm";
import WarrantyService from "./warranty.service";

export default function WarrantyPage() {
  const [warranty, setWarranty] = useState(null);

  const loadWarranty = async () => {
    try {
      const data = await WarrantyService.get();
      setWarranty(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadWarranty();
  }, []);

  if (!warranty) {
    return <p>Loading...</p>;
  }

  return (
    <WarrantyForm
      warranty={warranty}
      onSuccess={loadWarranty}
    />
  );
}