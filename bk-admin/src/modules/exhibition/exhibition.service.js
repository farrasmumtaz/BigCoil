import api from "../../services/api";

const ExhibitionService = {
  getAll() {
    return api.get("/exhibition").then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/exhibition/${id}`)
      .then((res) => res.data);
  },

  getBySlug(slug) {
    return api
      .get(`/exhibition/slug/${slug}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/exhibition", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/exhibition/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/exhibition/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/exhibition", formData)
      .then((res) => res.data);
  },
};

export default ExhibitionService;