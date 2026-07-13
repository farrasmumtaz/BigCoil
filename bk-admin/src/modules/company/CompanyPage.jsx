import { useEffect, useState } from "react";

import CompanyForm from "./CompanyForm";
import CompanyService from "./company.service";

export default function CompanyPage() {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCompany = async () => {
    try {
      const data = await CompanyService.getCompany();
      setCompany(data[0]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!company) {
    return <div>Company belum tersedia.</div>;
  }

  return (
    <CompanyForm
      company={company}
      onSuccess={fetchCompany}
    />
  );
}