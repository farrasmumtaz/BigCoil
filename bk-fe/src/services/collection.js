import api from "./api";

export const getRetailCollections = async () => {
  const response = await api.get("/collection/retail");
  return response.data;
};

export const getHospitalityCollections = async () => {
  const response = await api.get("/collection/hospitality");
  return response.data;
};

export const getCollection = async (id) => {
  const response = await api.get(`/collection/${id}`);
  return response.data;
};

export const getCollectionDetail = async (id) => {
  const response = await api.get(
    `/collection-detail/collection/${id}`
  );

  return response.data;
};