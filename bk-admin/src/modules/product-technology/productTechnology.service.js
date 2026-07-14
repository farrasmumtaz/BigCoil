import api from "../../services/api";

const ProductTechnologyService = {
  getAll() {
    return api
      .get("/product-technology")
      .then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/product-technology/${id}`)
      .then((res) => res.data);
  },

  getByProduct(productId) {
    return api
      .get(`/product-technology/product/${productId}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/product-technology", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/product-technology/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/product-technology/${id}`)
      .then((res) => res.data);
  },
};

export default ProductTechnologyService;