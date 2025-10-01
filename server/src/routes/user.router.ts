import express from "express";
import { registerUser } from "../handlers/user.handler";
import { updateUser } from "../handlers/update.handler";
import { registerSchema } from "../validators/user.validator";
import { validateRequest } from "../middlewares/validate";
import { authenticate } from "../middlewares/auth";
import { RequestHandler } from "express";

const router = express.Router();

router.get("/dashboard", authenticate, (req, res) => {
	res.json({ message: "You have access to dashboard", user: (req as any).user });
});
router.put("/:id", updateUser as RequestHandler);
router.post("/register", validateRequest(registerSchema), registerUser);
export default router;
