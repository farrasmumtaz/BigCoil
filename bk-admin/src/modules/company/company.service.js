import api from "../../services/api";

const CompanyService = {
  async getCompany() {
    const { data } = await api.get("/company");
    return data;
  },

  async updateCompany(id, formData) {
    const { data } = await api.patch(
      `/company/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return data;
  },
};

export default CompanyService;