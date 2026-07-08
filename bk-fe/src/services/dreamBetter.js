import api from "./api";

export const getDreamBetter = async () => {
  const response = await api.get("/dream-better");

  return response.data;
};