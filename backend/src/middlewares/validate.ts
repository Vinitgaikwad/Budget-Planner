import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";

export function validate<T>(fu: ZodType<T>) {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        const result = fu.safeParse(req.body);

        if (!result.success) {
            return res.status(401).json({
                error: 401,
                errorMsg: "Invalid Data",
                message: result.error.issues.map((issue) => { return issue.message })
            });
        }

        req.body = result.data;
        next();
    }
}