import type { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.js";
import { handleAddAccount } from "./account.service.js";

export const createAccounts = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;

    await handleAddAccount(body.data, decoded._id);
    return res.status(200).json({
        message: "Accounts Create Succussfully"
    });
});