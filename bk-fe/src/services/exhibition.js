import api from "./api";

export const exhibitionApi = {
  getAll() {
    return api
      .get("/exhibition")
      .then((res) => res.data);
  },

  getBySlug(slug) {
    return api
      .get(`/exhibition/slug/${slug}`)
      .then((res) => res.data);
  },
};