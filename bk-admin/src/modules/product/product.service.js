import api from "../../services/api";

const ProductService = {
  getAll() {
    return api.get("/product").then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/product/${id}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/product", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/product/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/product/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/product", formData)
      .then((res) => res.data);
  },
};

export default ProductService;