import api from "../../services/api";

const ServiceCenterService = {
  getAll() {
    return api.get("/service-center").then((res) => res.data);
  },

  create(data) {
    return api.post("/service-center", data).then((res) => res.data);
  },

  update(id, data) {
    return api
      .patch(`/service-center/${id}`, data)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/service-center/${id}`)
      .then((res) => res.data);
  },
};

export default ServiceCenterService;