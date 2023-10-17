import jwt from "jsonwebtoken";
import User from "../../models/User.js";

const revokedTokens = [];

export default class AuthController {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({ token });
  }

  async logout(req, res) {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "Token de autenticação não fornecido" });
    }

    if (revokedTokens.includes(token)) {
      return res.status(401).json({ message: "Token já foi revogado" });
    }

    revokedTokens.push(token);
    res.status(204).end();
  }
}
