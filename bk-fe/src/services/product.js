import api from "./api";

export const productApi = {
  getByCollection(collectionId) {
    return api
      .get(`/product/collection/${collectionId}`)
      .then((res) => res.data);
  },

  getBySlug(slug) {
    return api
      .get(`/product/slug/${slug}`)
      .then((res) => res.data);
  },
};