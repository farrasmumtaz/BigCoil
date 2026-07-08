import api from "./api";

export const getDealers = async () => {
  const response = await api.get("/dealer");

  return response.data;
};

export const getDealerByIsland = async (island) => {
  const response = await api.get(
    `/dealer/island/${island}`
  );

  return response.data;
};