import api from "../../services/api";

const DashboardService = {
  getDashboard() {
    return api.get("/dashboard").then((res) => res.data);
  },
};

export default DashboardService;