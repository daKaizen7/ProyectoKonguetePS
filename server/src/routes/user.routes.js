import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.controllers.js";
import { auth } from "../middlewares/validateToken.js";
import { schemaValidation } from "../middlewares/validator.middleware.js";
import { createSchema } from "../schemas/user.schema.js";

const router = Router();

router.get("/admin", auth, getUsers);

router.post("/admin", auth, schemaValidation(createSchema), createUser);

router.get("/admin/:id", auth, getUser);

router.put("/admin/:id", auth, updateUser);

router.delete("/admin/:id", auth, deleteUser);

export default router;
