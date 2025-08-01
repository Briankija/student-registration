import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validateRequest = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		res.status(400).json({
			errors: errors.array({ onlyFirstError: true }).map((err) => ({
				field: "param" in err ? err.param : "param",
				message: err.msg,
			})),
		});
		return;
	}

	next(); // continue only if no errors
};
