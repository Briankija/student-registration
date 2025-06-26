import { Request, Response, NextFunction } from "express";
import prisma from "../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//registration
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
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

		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
			expiresIn: "1h",
		});

		res.status(201).json({ message: "User registered successfully", user });
	} catch (error) {
		res.status(500).json({ error: "User registration failed", details: error });
	}
};

//signin
export const signInUser = async (req: Request, res: Response) => {
	const { usernameOrEmail, password } = req.body;

	try {
		const user = await prisma.register.findFirst({
			where: {
				OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
			},
		});

		if (!user) {
			return res.status(400).json({ error: "Invalid credentials" });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (isPasswordValid) {
			return res.status(401).json({ error: "Incorrect password" });
		}

		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string);

		res.status(200).json({ message: "Sign in successful", token });
	} catch (error) {
		res.status(500).json({ error: "Sign in failed", details: error });
	}
};
