import api from "../../services/api";

const CollectionService = {
  getAll() {
    return api.get("/collection").then((res) => res.data);
  },

  getOne(id) {
    return api.get(`/collection/${id}`).then((res) => res.data);
  },

  create(data) {
    return api.post("/collection", data).then((res) => res.data);
  },

  update(id, data) {
    return api.patch(`/collection/${id}`, data).then((res) => res.data);
  },

  remove(id) {
    return api.delete(`/collection/${id}`).then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/collection", formData)
      .then((res) => res.data);
  },
};

export default CollectionService;