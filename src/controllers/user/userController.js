import User from "../../models/User.js";

class UserController {
  async createUser(req, res) {
    try {
      console.log("Criando um novo usuário...");
      const newUser = new User(req.body);
      console.log("Novo usuário criado.");
      const savedUser = await newUser.save();
      console.log("Usuário salvo no banco de dados.");
      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Erro ao criar um usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getUserById(req, res) {
    const userId = req.params.id;

    try {
      const user = await User.findById(userId);
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

    try {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });
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
      const deletedUser = await User.findByIdAndRemove(userId);
      if (!deletedUser) {
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
