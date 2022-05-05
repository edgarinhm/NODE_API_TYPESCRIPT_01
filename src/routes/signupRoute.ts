import { Router } from "../config/app";
import { handleNewUser } from "../controllers/signupController";

const signupRoute = (router: Router): void => {
  router.post("/signup", handleNewUser);
  router.get("/test", (_req, res) => {
    res.send("Birds home page");
  });
};

export default signupRoute;
