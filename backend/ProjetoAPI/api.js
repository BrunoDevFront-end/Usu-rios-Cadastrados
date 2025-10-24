import axios from "axios";

const api = axios.create({
  baseURL: "https://cadastro-de-usuarios-4cpr.onrender.com/usuarios", // ajuste a URL do  backend
});

export default api;
