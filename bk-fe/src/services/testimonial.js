import api from "./api";

export const testimonialApi = {
  async getAll() {
    const { data } = await api.get("/testimonial");
    return data;
  },
};