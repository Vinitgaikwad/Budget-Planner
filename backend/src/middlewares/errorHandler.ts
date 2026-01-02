import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/custom.errors.js";
import { MongooseError } from "mongoose";
import { ZodError } from "zod";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            error: err.statusCode,
            errorMsg: process.env.NODE_ENV === "development" ? err : err.message,
        });
    }

    if (err instanceof MongooseError && (err as any).code === 11000) {
        return res.status(404).json({
            error: 404,
            errorMsg: process.env.NODE_ENV === "development" ? err : "Deplicate Key Error",
        });
    }

    if (err instanceof ZodError) {
        return res.status(404).json({
            error: 404,
            errorMsg: process.env.NODE_ENV === "development" ? err : err.message
        });
    }

    return res.status(500).json({
        error: 500,
        errorMsg: process.env.NODE_ENV === "development" ? err : err.message,
    });
}