import api from "./api";

export const getTechnologies = async () => {
  const response = await api.get("/technology");

  return response.data;
};