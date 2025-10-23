// Importa hooks do React e dependências necessárias
import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/Lixo1.png";
import api from "../../services/api";

// Componente principal da página de cadastro de usuários
function Home() {
  const [users, setUsers] = useState([]); // Estado que armazena os usuários
  const inputName = useRef(); // Referência para o campo de nome
  const inputAge = useRef(); // Referência para o campo de idade
  const inputEmail = useRef(); // Referência para o campo de email

  // Função que busca todos os usuários da API
  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");
    setUsers(usersFromApi.data);
  }

  // Função que cria um novo usuário
  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers(); // Atualiza a lista após o cadastro
  }

  // Função que exclui um usuário pelo ID
  async function deleteUsers(id) {
    await api.delete(`usuarios/${id}`);
    getUsers(); // Atualiza a lista após exclusão
  }

  // Executa a busca inicial de usuários ao carregar o componente
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      {/* Formulário de cadastro */}
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName} />
        <input placeholder="Idade" name="idade" type="number" ref={inputAge} />
        <input placeholder="Email" name="email" type="email" ref={inputEmail} />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {/* Listagem dos usuários cadastrados */}
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>

          {/* Botão para remover usuário */}
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
