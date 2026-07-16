import api from "./api";

const ServiceService = {
  async getCenters() {
    const res = await api.get("/service-center");
    return res.data;
  },

  async getIslands() {
    const res = await api.get("/service-center/islands");
    return res.data;
  },

  async getCities(island) {
    const res = await api.get(
      `/service-center/island/${encodeURIComponent(island)}`
    );

    return res.data;
  },

  async getByCity(city) {
    const res = await api.get(
      `/service-center/city/${encodeURIComponent(city)}`
    );

    return res.data;
  },

  async getSetting() {
    const res = await api.get("/service-setting");
    return res.data;
  },
};

export default ServiceService;