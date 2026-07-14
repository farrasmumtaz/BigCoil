import api from "../../services/api";

const CompanyService = {
  async getCompany() {
    const { data } = await api.get("/company");
    return data;
  },

  async updateCompany(id, data) {
    const response = await api.patch(`/company/${id}`, data);
    return response.data;
  },
};

export default CompanyService;