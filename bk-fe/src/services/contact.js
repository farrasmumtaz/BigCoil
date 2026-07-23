import api from "./api";
import { companyApi } from "./company";

export const contactApi = {
  getCompany() {
    return companyApi.get();
  },

  sendMessage(data) {
    return api
      .post("/contact", data)
      .then((res) => res.data);
  },
};
