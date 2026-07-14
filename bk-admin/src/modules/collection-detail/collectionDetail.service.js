import api from "../../services/api";

const CollectionDetailService = {
  getAll() {
    return api
      .get("/collection-detail")
      .then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/collection-detail/${id}`)
      .then((res) => res.data);
  },

  getByCollection(collectionId) {
    return api
      .get(`/collection-detail/collection/${collectionId}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/collection-detail", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/collection-detail/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/collection-detail/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/collection-detail", formData)
      .then((res) => res.data);
  },
};

export default CollectionDetailService;