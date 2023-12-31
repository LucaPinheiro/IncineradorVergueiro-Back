import express from "express";
import cors from "cors"; 
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import userRouter from "./routes/userRoutes.js";

const conexao = await connectDB();

conexao.on("error", console.log.bind(console, "Erro de conexão"));
conexao.once("open", () => {
  console.log("Conexão feita com sucesso");
});

const app = express();

// Configurar o middleware CORS
app.use(cors());

app.use(express.json());
app.use(userRouter);

routes(app);

app.use(errorHandler);

export default app;
