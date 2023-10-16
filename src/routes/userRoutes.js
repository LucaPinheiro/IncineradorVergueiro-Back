import express from "express";
import UserController from "../controllers/user/userController.js"; 

const userController = new UserController(); 

const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUserById);
router.delete("/users/:id", userController.deleteUserById);

export default router;
