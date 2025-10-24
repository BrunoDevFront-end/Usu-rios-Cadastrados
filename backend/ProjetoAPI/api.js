// src/services/api.js

import axios from "axios";

// Cria instância do Axios apontando para o backend local
const api = axios.create({
  baseURL: "http://localhost:3000", // URL base da sua API
});

export default api;
