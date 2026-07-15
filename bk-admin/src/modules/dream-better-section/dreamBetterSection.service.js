import api from "../../services/api";

const DreamBetterSectionService = {
    getAll() {
        return api.get("/dream-better-section").then((res) => res.data);
    },

    getOne(id) {
        return api.get(`/dream-better-section/dream-better/${id}`).then((res) => res.data);
    },
    
    create(data) {
        return api.post("/dream-better-section", data).then((res) => res.data);
    },

    update(id, data) {
        return api.patch(`/dream-better-section/${id}`, data).then((res) => res.data);
    },

    remove(id) {
        return api.delete(`/dream-better-section/${id}`).then((res) => res.data);
    },

    uploadImage(file) {
        const formData = new FormData();

        formData.append("file", file);

        return api
            .post("/upload/dream-better", formData)
            .then((res) => res.data);
    },
}