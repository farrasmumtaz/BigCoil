import api from "./api";

export const heroApi = {
  async getAll() {
    const { data } = await api.get("/hero");
    return data;
  },
};