import api from "./api";

export const dealerApi = {
  getAll() {
    return api
      .get("/dealer")
      .then((res) => res.data);
  },
};