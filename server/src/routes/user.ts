import express from "express";
import { registerUser } from "../handlers/user";
import { updateUser } from "../handlers/update";
import { RequestHandler } from "express";

const router = express.Router();
router.put("/users/:id", updateUser as RequestHandler);
router.post("/register", registerUser);
export default router;
