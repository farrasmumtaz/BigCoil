import { useEffect, useState } from "react";

import { testimonialApi } from "../../services/testimonial";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await testimonialApi.getAll();
        setTestimonials(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-20 bg-[#15130F]">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl text-[#F5F0E6]">
          Testimonial
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={`${BASE_URL}${item.image}`}
                alt={`testimonial-${item.id}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}