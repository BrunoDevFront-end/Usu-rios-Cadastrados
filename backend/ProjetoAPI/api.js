import axios from "axios";

const api = axios.create({
  baseURL: "https://cadastro-de-usuarios-4cpr.onrender.com/usuarios", // ajuste a URL do seu backend
});

export default api;
