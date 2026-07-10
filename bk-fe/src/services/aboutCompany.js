import api from "./api";

export const aboutCompanyApi = {
  getAll: async () => {
    const res = await api.get("/about-company");
    return res.data;
  },
};