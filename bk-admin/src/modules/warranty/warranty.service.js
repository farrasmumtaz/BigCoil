import api from "../../services/api";

const WarrantyService = {
  get() {
    return api.get("/warranty").then((res) => res.data);
  },

  update(data) {
    return api.patch("/warranty", data).then((res) => res.data);
  },

  uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    return api
      .post("/upload/warranty", formData)
      .then((res) => res.data);
  },
};

export default WarrantyService;