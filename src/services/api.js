import axios from "axios";

const api = axios.create({
    baseURL: "https://cafe-atividade-backend.onrender.com",
});

export default api;
