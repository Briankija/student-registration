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

		// updated fields conditionally
		const updatedFields: any = {};
		const updateLog: any = {
			registerId: user.id,
			oldUsername: user.username,
			oldRegistrationNo: user.registrationNo,
			oldEmail: user.email
		};

		if(username !== undefined){
			updatedFields.username = username;
			updateLog.newUsername = username;
		}

		if (registrationNo !== undefined) {
			updatedFields.registrationNo = registrationNo;
			updateLog.newRegistrationNo = registrationNo;
		}

		if(email !== undefined) {
			updatedFields.email = email;
			updateLog.oldEmail = email;
		}

		if(Object.keys(updatedFields).length === 0) {
			return res.status(400).json({ error: "No fields provided for update"})
		}

		// save updatelog and update user in transaction
		await prisma.$transaction([
			prisma.update.create({ data: updateLog}),
			prisma.register.update({
				where: {
					id: user.id,
				},
				data: updatedFields,
			}),
		]),
			res.status(200).json({ message: "Successfully Update" });
	} catch (error) {
		res.status(500).json({ error: "Failed to update", details: error });
	}
};
