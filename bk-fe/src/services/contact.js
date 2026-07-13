import api from "./api";

export const contactApi = {
  getCompany() {
    return api
      .get("/company/main")
      .then((res) => res.data);
  },

  sendMessage(data) {
    return api
      .post("/contact", data)
      .then((res) => res.data);
  },
};