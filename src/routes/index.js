import express from "express";
import userRoutes from "./userRoutes.js"; 

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Usina Eco Cultural"));

  //roteador para as rotas de usuário
  const userRouter = express.Router();

  //rotas de usuário usando o roteador
  userRouter.use("/users", userRoutes);

  //roteador de usuário principal
  app.use(express.json());  
  app.use(userRouter);
};

export default routes;
