// Importa dependências principais
import pkg from "@prisma/client";
import cors from "cors";
const { PrismaClient } = pkg;
import express from "express";

// Inicializa Express e Prisma
const prisma = new PrismaClient();
const app = express();

// Middleware para JSON e CORS
app.use(express.json());
app.use(cors());

/* ===== ROTAS PRINCIPAIS ===== */

// Cria um novo usuário
app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(req.body);
});

// Remove um usuário pelo ID
app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: { id: req.params.id },
  });
  res.status(200).json({ message: "Usuário deletado" });
});

// Atualiza dados de um usuário
app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({
    where: { id: req.params.id },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(req.body);
});

// Retorna todos os usuários com filtro opcional (name, email, age)
app.get("/usuarios", async (req, res) => {
  const { name, email, age } = req.query;
  const filtro = {};

  if (name) filtro.name = name;
  if (email) filtro.email = email;
  if (age) filtro.age = Number(age);

  const users = await prisma.user.findMany({ where: filtro });
  res.status(200).json(users);
});

// Inicia o servidor na porta 3000
app.listen(3000);
