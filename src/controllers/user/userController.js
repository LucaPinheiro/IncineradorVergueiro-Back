import UserService from "../../services/userService.js";

class UserController {
  async createUser(req, res) {
    const userAttributes = req.body;
    try {
      const savedUser = await UserService.createUser(userAttributes);
      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Erro ao criar um usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getUserById(req, res) {
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
  }

  async updateUserById(req, res) {
    const userId = req.params.id;
    const updatedAttributes = req.body;

    try {
      const updatedUser = await UserService.updateUserById(
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
  }

  async deleteUserById(req, res) {
    const userId = req.params.id;

    try {
      const result = await UserService.deleteUserById(userId);
      if (!result) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(204).end();
    } catch (error) {
      console.error("Erro ao deletar um usuário por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

export default UserController;
