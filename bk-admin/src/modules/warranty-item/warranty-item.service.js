import api from "../../services/api";

const WarrantyItemService = {
  getAll() {
    return api
      .get("/warranty-item")
      .then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/warranty-item/${id}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/warranty-item", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/warranty-item/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/warranty-item/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/warranty-item", formData)
      .then((res) => res.data);
  },
};

export default WarrantyItemService;