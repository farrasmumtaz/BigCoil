import { useEffect, useState } from "react";

import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

import ProductService from "./product.service";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const data =
        await ProductService.getAll();

      setProducts(data);
    } catch (err) {
      console.error(err);

      alert("Gagal mengambil data Product.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSuccess = () => {
    setSelectedProduct(null);

    fetchProducts();
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

      <ProductForm
        product={selectedProduct}
        onSuccess={handleSuccess}
      />

      <ProductTable
        products={products}
        onEdit={setSelectedProduct}
        onDelete={fetchProducts}
      />

    </div>
  );
}