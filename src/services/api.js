import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        "Content-type": "application/json"
    },

})

export default api;