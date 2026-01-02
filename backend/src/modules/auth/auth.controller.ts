import type { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.js";
import { handleSignIn, handleSignUp } from "./auth.service.js";

export const signUpUser = asyncHandler(async (req: Request, res: Response) => {
    const userDetails = req.body;
    await handleSignUp({ email: userDetails.email, password: userDetails.password });
    res.status(200).json({
        message: "Sign Up Successful"
    });
});

export const signInUser = asyncHandler(async (req: Request, res: Response) => {
    const userDetails = req.body;
    const token = await handleSignIn({ email: userDetails.email, password: userDetails.password });
    res.status(200).json({
        token: `Bearer ${token}`,
        message: "Sign In Successful"
    });
});