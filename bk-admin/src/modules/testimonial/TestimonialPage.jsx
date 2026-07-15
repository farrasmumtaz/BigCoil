import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TestimonialForm from "./TestimonialForm";
import TestimonialTable from "./TestimonialTable";

import TestimonialService from "./testimonial.service";

export default function TestimonialPage() {
  const [testimonials, setTestimonials] =
    useState([]);

  const [selectedTestimonial, setSelectedTestimonial] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchTestimonials = async () => {
    try {
      const data =
        await TestimonialService.getAll();

      setTestimonials(data);
    } catch (err) {
      console.error(err);

      toast.error("Gagal mengambil data testimonial.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleSuccess = () => {
    setSelectedTestimonial(null);

    fetchTestimonials();
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Yakin ingin menghapus testimonial ini?"
    );

    if (!ok) return;

    try {
      await TestimonialService.remove(id);
      toast.success("Testimonial Berhasil Dihapus")
      fetchTestimonials();
    } catch (err) {
      console.error(err);
      toast.error("Gagal Menghapus Testimonial")
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <TestimonialForm
        testimonial={selectedTestimonial}
        onSuccess={handleSuccess}
      />

      <TestimonialTable
        data={testimonials}
        onEdit={setSelectedTestimonial}
        onDelete={handleDelete}
      />
    </div>
  );
}