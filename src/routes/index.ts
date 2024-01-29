import { Router } from "express";
import clienteRouter from "./cliente.routes";

const routes = Router();
routes.use("/clientes", clienteRouter);

export default routes;
