import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TechnologyForm from "./TechnologyForm";
import TechnologyTable from "./TechnologyTable";

import TechnologyService from "./technology.service";

export default function TechnologyPage() {
    const [technologies, setTechnologies] = useState([]);

    const [selectedTechnology, setSelectedTechnology] =
        useState(null);

    const [loading, setLoading] = useState(true);

    const fetchTechnologies = async () => {
        try {
            const data =
                await TechnologyService.getAll();

            setTechnologies(data);
        } catch (err) {
            console.error(err);

            toast.error("Gagal mengambil data technology.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTechnologies();
    }, []);

    const handleSuccess = () => {
        setSelectedTechnology(null);

        fetchTechnologies();
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Yakin ingin menghapus technology ini?"
        );

        if (!confirmDelete) return;

        try {
            await TechnologyService.remove(id);

            fetchTechnologies();
        } catch (err) {
            console.error(err);

            toast.error("Gagal menghapus technology.");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-8">
            <TechnologyForm
                technology={selectedTechnology}
                onSuccess={handleSuccess}
            />

            <TechnologyTable
                technologies={technologies}
                onEdit={setSelectedTechnology}
                onDelete={handleDelete}
            />
        </div>
    );
}