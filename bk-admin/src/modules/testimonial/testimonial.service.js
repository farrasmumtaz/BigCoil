import api from "../../services/api";

const TestimonialService = {
  getAll() {
    return api.get("/testimonial").then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/testimonial/${id}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/testimonial", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/testimonial/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/testimonial/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/testimonial", formData)
      .then((res) => res.data);
  },
};

export default TestimonialService;