import api from "./api";

export const dreamBetterApi = {
  getAll() {
    return api
      .get("/dream-better")
      .then((res) => res.data);
  },

  getBySlug(slug) {
    return api
      .get(`/dream-better/slug/${slug}`)
      .then((res) => res.data);
  },
};