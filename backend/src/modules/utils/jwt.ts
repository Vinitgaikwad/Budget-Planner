import jwt from "jsonwebtoken"
import type { TokenDetail } from "../auth/auth.schema.js";

export function signToken(payload: TokenDetail) {
    return jwt.sign(payload, process.env.SECRET || "9090909");
}

export function verifyToken(token: string) {
    return jwt.verify(token, process.env.SECRET || "9090909");
}