import api from "../../services/api";

const ProductSpecificationService = {
  getAll() {
    return api
      .get("/product-specification")
      .then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/product-specification/${id}`)
      .then((res) => res.data);
  },

  getByProduct(productId) {
    return api
      .get(`/product-specification/product/${productId}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/product-specification", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/product-specification/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/product-specification/${id}`)
      .then((res) => res.data);
  },

  uploadIcon(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/product-specification", formData)
      .then((res) => res.data);
  },
};

export default ProductSpecificationService;