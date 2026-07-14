import api from "../../services/api";

const ProductGalleryService = {
  getAll() {
    return api
      .get("/product-gallery")
      .then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/product-gallery/${id}`)
      .then((res) => res.data);
  },

  getByProduct(productId) {
    return api
      .get(`/product-gallery/product/${productId}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/product-gallery", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/product-gallery/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/product-gallery/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/product-gallery", formData)
      .then((res) => res.data);
  },
};

export default ProductGalleryService;