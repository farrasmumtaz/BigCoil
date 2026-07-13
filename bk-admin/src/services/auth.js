import api from "./api";

export const authApi = {
  login(data) {
    return api.post("/auth/login", data).then((res) => res.data);
  },

  profile() {
    return api.get("/auth/profile").then((res) => res.data);
  },
};