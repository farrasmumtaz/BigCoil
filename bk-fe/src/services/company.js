import api from "./api";

export const getCompany = async () => {
  const response = await api.get("/company");
  return response.data;
};