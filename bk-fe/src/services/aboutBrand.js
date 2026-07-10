import api from "./api";

export const aboutBrandApi = {
  getAll: async () => {
    const res = await api.get("/about-brand");
    return res.data;
  },
};