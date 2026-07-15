import api from "../../services/api";

const AboutBrandService = {
  getAll() {
    return api.get("/about-brand").then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/about-brand/${id}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/about-brand", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/about-brand/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/about-brand/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/about-brand", formData)
      .then((res) => res.data);
  },
};

export default AboutBrandService;