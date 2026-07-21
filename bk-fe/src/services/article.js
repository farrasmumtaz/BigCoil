import api from "./api";

export const articleApi = {
  getAll: async () => {
    const res = await api.get("/article");
    return res.data;
  },

  getByCategory: async (category) => {
    const res = await api.get(`/article/category/${category}`);
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/article/${id}`);
    return res.data;
  },
};