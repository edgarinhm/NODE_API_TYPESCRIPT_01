import express, { Express, json } from "express";
import cors from "cors";
import { logger } from "../middlewares/logEvents";
import errorHandler from "../middlewares/errorHandler";
import corsOptions from "./corsOptions";
import path from "path";

export const setupMiddlewares = (app: Express): void => {
  app.use(logger);
  app.use(cors(corsOptions));
  app.use(json());
  app.use("/", express.static(path.join(__dirname, "/public")));
  app.use((_req, res, next) => {
    res.type("json");
    next();
  });
};

export const setupHandleErrors = (app: Express): void => {
  app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("json")) {
      res.json({ error: "404 Not Found" });
    } else {
      res.type("txt").send("404 Not Found");
    }
  });
  app.use(errorHandler);
};
