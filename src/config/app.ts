import { setupHandleErrors, setupMiddlewares } from "./middlewares";
import { setupRoutes } from "./routes";
import express, { Router } from "express";

const app = express();
setupMiddlewares(app);
setupRoutes(app).then(() => setupHandleErrors(app));

export { app, express, Router };
