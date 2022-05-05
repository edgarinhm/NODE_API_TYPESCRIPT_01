import { env } from "./config/.env";
import dotenv from "dotenv";
import { app } from "./config/app";
import "reflect-metadata";

dotenv.config({
  path: process.env.DOTENV_CONFIG_PATH || undefined,
});

app.listen(env.port, () =>
  console.log(`Server running at http://localhost:${env.port}`)
);
