import jwt from "jsonwebtoken";
import User from "../../models/User.js";
import RevokedToken from "../../models/revokedTokenModel.js";

const revokedTokens = [];

export default class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Formato de email inválido" });
    }

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
    res.json({ token, userId: user.id });
  }

  async logout(req, res) {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ message: "Token de autenticação não fornecido" });
    }

    if (revokedTokens.includes(token)) {
      return res.status(401).json({ message: "Token já foi revogado" });
    }

    const revokedToken = new RevokedToken({ token });
    await revokedToken.save();

    res.status(204).end();
  }
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
