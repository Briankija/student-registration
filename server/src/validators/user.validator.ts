import { body } from "express-validator";

export const registerValidator = [
	body("username").notEmpty().withMessage("Username is requires"),
	body("registrationNo").notEmpty().withMessage("Registration Number is required"),
	body("email").isEmail().withMessage("Valid email is required"),
	body("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters"),
	body("confirmPassword").custom((value, { req }) => {
		if (value !== req.body.password) throw new Error("Passwords do not match!");
		return true;
	}),
];
