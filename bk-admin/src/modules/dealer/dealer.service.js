import api from "../../services/api";

const DealerService = {
    getAll() {
        return api.get("/dealer").then((res) => res.data);
    },

    getOne(id) {
        return api
            .get(`/dealer/${id}`)
            .then((res) => res.data);
    },

    getIslands() {
        return api
            .get("/dealer/islands")
            .then((res) => res.data);
    },

    getCities(island) {
        return api
            .get(`/dealer/island/${island}`)
            .then((res) => res.data);
    },

    getByCity(city) {
        return api
            .get(`/dealer/city/${city}`)
            .then((res) => res.data);
    },

    create(data) {
        return api
            .post("/dealer", data)
            .then((res) => res.data);
    },

    update(id, data) {
        return api
            .patch(`/dealer/${id}`, data)
            .then((res) => res.data);
    },

    remove(id) {
        return api
            .delete(`/dealer/${id}`)
            .then((res) => res.data);
    },
};

export default DealerService;