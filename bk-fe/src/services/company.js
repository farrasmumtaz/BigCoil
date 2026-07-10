import api from "./api";

export const companyApi = {
  get: async () => {
    const res = await api.get("/company");
    return res.data[0];
  },
};