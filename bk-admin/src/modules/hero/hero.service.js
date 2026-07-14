import api from "../../services/api";

const HeroService = {
  getHero() {
    return api.get("/hero").then((res) => res.data);
  },

  updateHero(id, data) {
    return api.patch(`/hero/${id}`, data).then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/hero", formData)
      .then((res) => res.data);
  },
};

export default HeroService;