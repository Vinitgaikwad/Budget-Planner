import type { NextFunction, Request } from "express";
import { AuthenticationError } from "../errors/custom.errors.js";
import { verifyToken } from "../modules/utils/jwt.js";

export function validateHeader(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new AuthenticationError();
        }

        const decoded = verifyToken(authHeader);
        (req as any).auth = decoded;
        next();
    } catch (error) {
        throw error;
    }
}
