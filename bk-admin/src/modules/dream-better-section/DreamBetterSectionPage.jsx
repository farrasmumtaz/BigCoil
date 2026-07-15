import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DreamBetterSectionForm from "./DreamBetterSectionForm";
import DreamBetterSectionTable from "./DreamBetterSectionTable";

import {DreamBetterSectionService} from "./dreamBetterSection.service";

export default function DreamBetterSectionPage() {
  const [sections, setSections] = useState([]);

  const [selectedSection, setSelectedSection] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const fetchSections = async () => {
    try {
      const data =
        await DreamBetterSectionService.getAll();

      setSections(data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil data Dream Better Section.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const handleSuccess = () => {
    setSelectedSection(null);

    fetchSections();
  };

  const handleDelete = async () => {
    fetchSections();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <DreamBetterSectionForm
        section={selectedSection}
        onSuccess={handleSuccess}
      />

      <DreamBetterSectionTable
        sections={sections}
        onEdit={setSelectedSection}
        onDelete={handleDelete}
      />
    </div>
  );
}