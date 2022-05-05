import { Router, Express } from "express";
import { readdirSync } from "fs";
import { join } from "path";

export const setupRoutes = async (app: Express): Promise<void> => {
  const router = Router();
  const routes = readdirSync(join(__dirname, "../routes")).filter(
    (file) => !file.endsWith(".map")
  );

  for await (const file of routes) {
    (await import(`../routes/${file}`)).default(router);
  }

  app.use("/api", router);
};
