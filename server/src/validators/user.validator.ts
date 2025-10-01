import { email, z } from "zod";

export const registerSchema = z.object({
	username: z.string().min(1, "Username is required"),
	registrationNo: z.string().min(1, "Registration Number is required"),
	email: z.string().email("Valid email is required"),
	password: z.string().min(6,"Password must be at least 6 characters"),
	confirmPassword: z.string().min(1, "Confirm Password is required")
}).refine((data) => data.password === data.confirmPassword, {
	path: ["confirmPassword"],
	message: "Password do not match!",
})
