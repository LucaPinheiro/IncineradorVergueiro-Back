import express from "express";
import productRouter from "../routes/productRoutes.js";
import eventRouter from "../routes/eventRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Usina Eco Cultural"));

  // Roteador para as rotas de usuário
  const userRouter = express.Router();

  // Roteador de eventos
  app.use(express.json(), userRouter, productRouter, eventRouter); 
};

export default routes;
