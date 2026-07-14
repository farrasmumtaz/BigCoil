import api from "../../services/api";

const CollectionCategoryService = {
  getAll() {
    return api.get("/collection-category").then((res) => res.data);
  },

  getOne(id) {
    return api.get(`/collection-category/${id}`).then((res) => res.data);
  },

  create(data) {
    return api.post("/collection-category", data).then((res) => res.data);
  },

  update(id, data) {
    return api.patch(`/collection-category/${id}`, data).then((res) => res.data);
  },

  remove(id) {
    return api.delete(`/collection-category/${id}`).then((res) => res.data);
  },
};

export default CollectionCategoryService;