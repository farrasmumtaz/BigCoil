import { useEffect, useState } from "react";

import ContactTable from "./ContactTable";
import ContactDetailModal from "./ContactDetailModal";

import ContactService from "./contact.service";

export default function ContactPage() {
  const [messages, setMessages] = useState([]);

  const [selectedMessage, setSelectedMessage] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchMessages = async () => {
    try {
      const data =
        await ContactService.getAll();

      setMessages(data);
    } catch (err) {
      console.error(err);

      alert("Gagal mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus pesan ini?"
    );

    if (!ok) return;

    try {
      await ContactService.remove(id);

      fetchMessages();
    } catch (err) {
      console.error(err);

      alert("Gagal menghapus pesan.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ContactTable
        data={messages}
        onView={setSelectedMessage}
        onDelete={handleDelete}
      />

      <ContactDetailModal
        message={selectedMessage}
        onClose={() =>
          setSelectedMessage(null)
        }
      />
    </>
  );
}