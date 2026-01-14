import type { NextFunction, Request, Response } from "express";
import { AuthenticationError } from "../errors/custom.errors.js";
import { verifyToken } from "../modules/utils/jwt.js";

export function validateAuth() {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader) {
                throw new AuthenticationError("Invalid Credentials");
            }
            const [schema, auth] = authHeader?.split(" ")

            if (schema !== "Bearer" || !auth) {
                throw new AuthenticationError("Invalid Credentials");
            }
            const decoded = verifyToken(auth);
            (req as any).auth = decoded;
            console.log(decoded);
            next();
        } catch (error) {
            throw error;
        }
    }
}

