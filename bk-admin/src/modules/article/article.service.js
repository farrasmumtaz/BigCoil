import api from "../../services/api";

const ArticleService = {
  getAll() {
    return api.get("/article").then((res) => res.data);
  },

  getCategories() {
    return api.get("/article/categories").then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/article/${id}`)
      .then((res) => res.data);
  },

  create(data) {
    return api
      .post("/article", data)
      .then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/article/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/article/${id}`)
      .then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/article", formData)
      .then((res) => res.data);
  },
};

export default ArticleService;
