import express from "express";
import AuthController from "../controllers/auth/authController.js";

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;
