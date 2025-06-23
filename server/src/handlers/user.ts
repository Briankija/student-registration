import { Request, Response } from "express";
import prisma from "../db";
import bcrypt from "bcryptjs";

export const registerUser = async (req: Request, res: Response) => {
	const { username, registrationNo, email, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const user = await prisma.register.create({
			data: {
				username,
				registrationNo,
				email,
				password: hashedPassword,
			},
		});

		res.status(201).json({ message: "User registered successfully", user });
	} catch (error) {
		res.status(500).json({ error: "User registration failed", details: error });
	}
};
