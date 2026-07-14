import api from "./api";

export const uploadApi = {
  async upload(folder, file) {
    const formData = new FormData();

    formData.append("file", file);

    const { data } = await api.post(
      `/upload/${folder}`,
      formData,
    );

    return data;
  },
};