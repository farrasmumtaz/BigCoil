import api from "./api";

export const dealerApi = {
  getIslands() {
    return api.get("/dealer/islands").then((res) => res.data);
  },

  getCities(island) {
    return api
      .get(`/dealer/island/${encodeURIComponent(island)}`)
      .then((res) => res.data);
  },

  getDealers(city) {
    return api
      .get(`/dealer/city/${encodeURIComponent(city)}`)
      .then((res) => res.data);
  },
};