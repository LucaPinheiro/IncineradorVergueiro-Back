import UserService from "../../services/userService.js";

class UserController {
  createUser = async (req, res) => {
    const userAttributes = req.body;

    if (!this.isValidEmail(userAttributes.email)) {
      return res.status(400).json({ message: "Email inválido" });
    }
    if (!this.isValidPassword(userAttributes.password)) {
      return res.status(400).json({ message: "Senha inválida" });
    }
    if (!this.isValidCPF(userAttributes.cpf)) {
      return res.status(400).json({ message: "CPF inválido" });
    }

    try {
      const savedUser = await UserService.createUser(userAttributes);
      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Erro ao criar um usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).send("Erro interno do servidor");
    }
  };

  getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
      const user = await UserService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Erro ao buscar um usuário por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  };

  updateUserById = async (req, res) => {
    const userId = req.params.id;
    const updatedAttributes = req.body;

    try {
      const updatedUser = await UserService.updateUser(
        userId,
        updatedAttributes
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Erro ao atualizar um usuário por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  };

  deleteUserById = async (req, res) => {
    const userId = req.params.id;

    try {
      const result = await UserService.deleteUser(userId);
      if (!result) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(204).end();
    } catch (error) {
      console.error("Erro ao deletar um usuário por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  };

  isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  isValidPassword = (password) => {
    return password.length >= 8;
  };

  isValidCPF = (cpf) => {
    return /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/.test(cpf);
  };
}

export default UserController;
