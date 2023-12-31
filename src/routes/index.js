import express from "express";
import productRouter from "../routes/productRoutes.js";
import eventRouter from "../routes/eventRoutes.js";
import authRouter from "../routes/authRoutes.js";
import newOrderRouter from "../routes/newOrderRoutes.js";
import suggestionEventRouter from "../routes/suggestionEventRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Usina Eco Cultural"));

  // Roteador para as rotas de usuário
  const userRouter = express.Router();

  // Roteador 
  app.use(
    express.json(),
    userRouter,
    productRouter,
    eventRouter,
    authRouter,
    newOrderRouter,
    suggestionEventRouter
  );
};

export default routes;
