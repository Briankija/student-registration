import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError, ZodIssue } from "zod";

export const validateRequest = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      // result.error is a ZodError, which contains .issues (not .errors)
      const formattedErrors = result.error.issues.map((err: ZodIssue) => ({
        field: err.path[0] as string,
        message: err.message,
      }));

      res.status(400).json({ errors: formattedErrors });
      return;
    }

    req.body = result.data;
    next();
  };
};
