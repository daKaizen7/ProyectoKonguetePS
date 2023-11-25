import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { schemaValidation } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", schemaValidation(registerSchema), register);
router.post("/login", schemaValidation(loginSchema), login);
router.post("/logout", logout);
router.post("/profile", authRequired, profile);

export default router;
