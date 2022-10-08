import { Router } from "express";
import authController from "../../controllers/authController.js";
import { authMiddleware } from "../../middlewares/tokensMiddleware.js";

const router = Router();

router
  .get("/roles", authMiddleware(), authController.roles)
  .post("/login", authController.login);

export default router;
