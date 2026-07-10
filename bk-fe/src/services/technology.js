import api from "./api";

export const technologyApi = {
  getCoil: async () => {
    const res = await api.get("/technology/coil");
    return res.data;
  },

  getFoam: async () => {
    const res = await api.get("/technology/foam");
    return res.data;
  },
};