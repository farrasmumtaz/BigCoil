import api from "../../services/api";

const ContactService = {
  getAll() {
    return api.get("/contact").then((res) => res.data);
  },

  getOne(id) {
    return api
      .get(`/contact/${id}`)
      .then((res) => res.data);
  },

  remove(id) {
    return api
      .delete(`/contact/${id}`)
      .then((res) => res.data);
  },
};

export default ContactService;