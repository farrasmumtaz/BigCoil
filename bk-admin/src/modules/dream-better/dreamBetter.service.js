import api from "../../services/api";

const DreamBetterService = {
  getAll() {
    return api.get("/dream-better").then((res) => res.data);
  },

  getOne(id) {
    return api.get(`/dream-better/${id}`).then((res) => res.data);
  },

  getBySlug(slug) {
    return api
      .get(`/dream-better/slug/${slug}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/dream-better", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/dream-better/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/dream-better/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/dream-better", formData)
      .then((res) => res.data);
  },
};

export default DreamBetterService;