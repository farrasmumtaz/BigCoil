import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import WarrantyItemForm from "./WarrantyItemForm";
import WarrantyItemTable from "./WarrantyItemTable";
import WarrantyItemService from "./warranty-item.service";

const initialForm = {
  warrantyId: 1,
  title: "",
  description: "",
  image: "",
  sortOrder: 0,
};

export default function WarrantyItemPage() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] =
    useState(initialForm);

  const fetchItems = async () => {
    try {
      const data =
        await WarrantyItemService.getAll();

      setItems(data);
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal mengambil data."
      );
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const edit = (item) => {
    setSelectedItem(item);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const remove = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus item ini?"
    );

    if (!ok) return;

    try {
      await WarrantyItemService.remove(id);

      toast.success(
        "Warranty item berhasil dihapus."
      );

      if (selectedItem?.id === id) {
        setSelectedItem(initialForm);
      }

      fetchItems();
    } catch (err) {
      console.error(err);

      toast.error(
        "Gagal menghapus warranty item."
      );
    }
  };

  const success = () => {
    setSelectedItem(initialForm);
    fetchItems();
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Warranty Item
        </h1>

        <p className="mt-2 text-gray-500">
          Manage warranty items.
        </p>
      </div>

      <WarrantyItemForm
        item={selectedItem}
        onSuccess={success}
      />

      <WarrantyItemTable
        items={items}
        onEdit={edit}
        onDelete={remove}
      />
    </div>
  );
}