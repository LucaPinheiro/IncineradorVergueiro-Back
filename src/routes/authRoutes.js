import express from "express";
import AuthController from "../controllers/auth/authController.js";
import AuthService from "../services/authService.js";

const authRouter = express.Router();
const authController = new AuthController();
const authService = new AuthService();

authRouter.post("/login", authController.login);
authRouter.post("/logout", authService.verifyToken ,authController.logout);

export default authRouter;
