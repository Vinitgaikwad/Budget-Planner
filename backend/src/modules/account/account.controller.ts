import type { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.js";
import { handleAddAccount, handleDeleteAccount, handleEditAccount, handleGetAccounts } from "./account.service.js";

export const createAccounts = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;

    const accounts = await handleAddAccount(body.data, decoded._id);
    return res.status(200).json({
        message: "Accounts Create Succussfully",
        accounts
    });
});

export const editAccounts = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;
    const accounts = await handleEditAccount(body.data, decoded._id);
    return res.status(200).json({
        message: "Accounts Create Succussfully",
        accounts
    });
});

export const deleteAccounts = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;
    const accounts = await handleDeleteAccount(body.data, decoded._id);
    return res.status(200).json({
        message: "Accounts Create Succussfully",
        accounts
    });
});

export const getAccounts = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const accounts = await handleGetAccounts(decoded._id);
    return res.status(200).json({
        message: "Accounts Create Succussfully",
        accounts
    });
});