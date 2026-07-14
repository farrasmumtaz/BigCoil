import api from "../../services/api";

const ProductDescriptionService = {
  getAll() {
    return api
      .get("/product-description")
      .then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/product-description/${id}`)
      .then((res) => res.data);
  },

  getByProduct(productId) {
    return api
      .get(`/product-description/product/${productId}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/product-description", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/product-description/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/product-description/${id}`)
      .then((res) => res.data);
  },
};

export default ProductDescriptionService;