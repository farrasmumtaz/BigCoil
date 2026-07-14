import api from "../../services/api";

const TechnologyService = {
  getAll() {
    return api.get("/technology").then((res) => res.data);
  },

  getOne(id) {
    return api.get(`/technology/${id}`).then((res) => res.data);
  },

  create(data) {
    return api.post("/technology", data).then((res) => res.data);
  },

  update(id, data) {
    return api.patch(`/technology/${id}`, data).then((res) => res.data);
  },

  remove(id) {
    return api.delete(`/technology/${id}`).then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/technology", formData)
      .then((res) => res.data);
  },
};

export default TechnologyService;