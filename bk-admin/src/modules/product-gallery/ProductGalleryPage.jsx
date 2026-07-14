import { useEffect, useState } from "react";

import ProductGalleryForm from "./ProductGalleryForm";
import ProductGalleryTable from "./ProductGalleryTable";

import ProductGalleryService from "./productGallery.service";

export default function ProductGalleryPage() {
    const [galleries, setGalleries] = useState([]);

    const [selectedGallery, setSelectedGallery] =
        useState(null);

    const [loading, setLoading] = useState(true);

    const fetchGallery = async () => {
        try {
            const data =
                await ProductGalleryService.getAll();

            setGalleries(data);
        } catch (err) {
            console.error(err);

            alert("Gagal mengambil gallery.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const handleSuccess = () => {
        setSelectedGallery(null);

        fetchGallery();
    };

    if (loading)
        return (
            <div className="p-10">
                Loading...
            </div>
        );

    return (
        <div className="space-y-8">
            <ProductGalleryForm
                gallery={selectedGallery}
                onSuccess={handleSuccess}
            />

            <ProductGalleryTable
                galleries={galleries}
                onEdit={setSelectedGallery}
                onDelete={fetchGallery}
            />
        </div>
    );
}