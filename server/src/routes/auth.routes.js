import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verify,
} from "../controllers/auth.controller.js";
import { auth } from "../middlewares/validateToken.js";
import { schemaValidation } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", schemaValidation(registerSchema), register);
router.post("/login", schemaValidation(loginSchema), login);
router.post("/logout", logout);

router.get("/verify", verify);

router.get("/profile", auth, profile);

export default router;
