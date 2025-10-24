// src/services/api.js

import axios from "axios";

// Cria instância do Axios apontando para o backend local
const api = axios.create({
  baseURL: "https://cadastro-de-usuarios-4cpr.onrender.com/usuarios", // URL base da sua API
});

export default api;
