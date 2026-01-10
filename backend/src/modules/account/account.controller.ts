import type { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.js";
import { handleNewAccounts } from "./account.service.js";

export const createAccounts = asyncHandler(async (req: Request, res: Response) => {
    const data = req.body;
    const auth = req.headers;

    await handleNewAccounts(data, auth.authorization || "");
    return res.status(200).json({
        message: "Accounts Create Succussfully"
    });
});