import api from "./api";

export const collectionDetailApi = {
  async getByCollection(collectionId) {
    const res = await api.get(`/collection-detail/collection/${collectionId}`);
    return res.data;
  },
};