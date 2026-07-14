import { useEffect, useState } from "react";

import CollectionCategoryForm from "./CollectionCategoryForm";
import CollectionCategoryTable from "./CollectionCategoryTable";

import CollectionCategoryService from "./collection-category.service";

export default function CollectionCategoryPage() {
  const [categories, setCategories] = useState([]);

  const [selected, setSelected] = useState(null);

  const fetchCategories = async () => {
    const data = await CollectionCategoryService.getAll();

    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="space-y-8">
      <CollectionCategoryForm
        category={selected}
        onSuccess={() => {
          setSelected(null);
          fetchCategories();
        }}
      />

      <CollectionCategoryTable
        data={categories}
        onEdit={setSelected}
        onDelete={async (id) => {
          if (!confirm("Hapus category?")) return;

          await CollectionCategoryService.remove(id);

          fetchCategories();
        }}
      />
    </div>
  );
}