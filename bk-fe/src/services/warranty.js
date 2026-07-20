import api from "./api";

export const warrantyApi = {
  get: async () => {
    const res = await api.get("/warranty");
    return res.data;
  },
};