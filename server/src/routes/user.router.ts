import express from "express";
import { registerUser } from "../handlers/user.handler";
import { updateUser } from "../handlers/update.handler";
import { RequestHandler } from "express";

const router = express.Router();
router.put("/:id", updateUser as RequestHandler);
router.post("/register", registerUser);
export default router;
