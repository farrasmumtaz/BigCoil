import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CollectionForm from "./CollectionForm";
import CollectionTable from "./CollectionTable";

import CollectionService from "./collection.service";

export default function CollectionPage() {
    const [collections, setCollections] = useState([]);

    const [selectedCollection, setSelectedCollection] =
        useState(null);

    const [loading, setLoading] = useState(true);

    const fetchCollections = async () => {
        try {
            const data =
                await CollectionService.getAll();

            setCollections(data);
        } catch (err) {
            console.error(err);

            toast.error("Gagal mengambil data collection.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCollections();
    }, []);

    const handleSuccess = () => {
        setSelectedCollection(null);

        fetchCollections();
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Yakin ingin menghapus collection ini?"
        );

        if (!confirmDelete) return;

        try {
            await CollectionService.remove(id);

            fetchCollections();
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-8">

            <CollectionForm
                collection={selectedCollection}
                onSuccess={handleSuccess}
            />

            <CollectionTable
                collections={collections}
                onEdit={setSelectedCollection}
                onReload={fetchCollections}
            />

        </div>
    );
}