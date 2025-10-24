import api from "./services/api";

const cadastrarUsuario = async () => {
  try {
    const response = await api.post("/usuarios", {
      name: "Bruno",
      email: "bruno@gmail.com",
      age: 29,
    });
    console.log("Usuário cadastrado:", response.data);
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
  }
};
