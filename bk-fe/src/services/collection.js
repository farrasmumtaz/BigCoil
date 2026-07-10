import api from "./api";

export const collectionApi = {
  getRetail: async () => {
    const res = await api.get("/collection/retail");
    return res.data;
  },

  getHospitality: async () => {
    const res = await api.get("/collection/hospitality");
    return res.data;
  },

  getBySlug(slug) {
    return api
      .get(`/collection/slug/${slug}`)
      .then((res) => res.data);
  }
};