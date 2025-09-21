import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/GreenShadow/api/v1", // ✅ backend base URL
});

export default api;
