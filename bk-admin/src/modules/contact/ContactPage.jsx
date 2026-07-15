import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ContactTable from "./ContactTable";
import ContactDetailModal from "./ContactDetailModal";

import ContactService from "./contact.service";

export default function ContactPage() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const data = await ContactService.getAll();
      setMessages(data);
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    const ok = window.confirm("Yakin ingin menghapus pesan ini?");
    if (!ok) return;

    try {
      // 1. Eksekusi hapus ke backend (Hanya berjalan 1 kali)
      await ContactService.remove(id);

      // 2. Tampilkan toast sukses
      toast.success("Pesan berhasil dihapus.");

      // 3. Tarik kembali data terbaru dari database
      fetchMessages();
    } catch (err) {
      console.error(err);
      toast.error("Gagal menghapus pesan.");
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
        onClose={() => setSelectedMessage(null)}
      />
    </>
  );
}