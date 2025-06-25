import { Request, Response } from "express";
import prisma from "../db";

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { username,registrationNo, email } = req.body;

	try {
		const user = await prisma.register.findUnique({
			where: {
				id: Number(id),
			},
		});

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		// save update log and update user in a transction
		await prisma.$transaction([
			prisma.update.create({
				data: {
					registerId: user.id,
					oldUsername: user.username,
					oldRegistrationNo: user.registrationNo,
					oldEmail: user.email,
					newUsername: username,
					newRegistrationNo: registrationNo,
					newEmail: email,
				},
			}),
			prisma.register.update({
				where: {
					id: user.id,
				},
				data: {
					username,
					registrationNo,
					email,
				},
			}),
		]),
			res.status(200).json({ message: "Successfully Update" });
	} catch (error) {
		res.status(500).json({ error: "Failed to update", details: error });
	}
};
