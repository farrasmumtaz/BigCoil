import api from "./api";

export const warrantyItemApi = {
  getAll() {
    return api
      .get("/warranty-item")
      .then((res) => res.data);
  },
};