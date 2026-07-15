import api from "../../services/api";

const AboutCompanyService = {
  getAll() {
    return api
      .get("/about-company")
      .then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/about-company/${id}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/about-company", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/about-company/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/about-company/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/about-company", formData)
      .then((res) => res.data);
  },
};

export default AboutCompanyService;