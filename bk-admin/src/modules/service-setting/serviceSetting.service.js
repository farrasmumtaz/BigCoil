import api from "../../services/api";

const ServiceSettingService = {
  get() {
    return api
      .get("/service-setting")
      .then((res) => res.data);
  },

  update(data) {
    return api
      .patch("/service-setting", data)
      .then((res) => res.data);
  },
};

export default ServiceSettingService;