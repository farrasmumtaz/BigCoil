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

  getBySlug: async (slug) => {
    const res = await api.get(`/collection/slug/${slug}`);
    return res.data;
  },
};