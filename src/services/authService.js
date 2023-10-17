import jwt from "jsonwebtoken";

class AuthService {
  verifyToken(req, res, next) {
    const token = req.header("Authorization");
    console.log("AuthService.verifyToken: Verificando token...");

    if (!token) {
      console.log("AuthService.verifyToken: Token não fornecido.");
      return res.status(401).json({ message: "Token não fornecido" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("AuthService.verifyToken: Token inválido.");
        return res.status(401).json({ message: "Token inválido" });
      }

      console.log("AuthService.verifyToken: Token válido.");
      req.user = decoded;
      next();
    });
  }
}

export default AuthService;
