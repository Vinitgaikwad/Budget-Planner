import type { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.js";
import { handleAddBudget, handleDeleteBudget, handleEditBudget, handleGetBudgets } from "./budget.service.js";

export const addBudget = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;
    const budgets = await handleAddBudget(body, decoded._id);
    res.json({
        message: "Added Budget Successfully",
        budgets
    });
});

export const editBudget = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;
    const budgets = await handleEditBudget(body, decoded._id);
    res.json({
        message: "Edited Budget Successfully",
        budgets
    });
});

export const deleteBudget = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;
    const budgets = await handleDeleteBudget(body, decoded._id);
    res.json({
        message: "Deleted Budget Successfully",
        budgets
    });
});

export const getBudgets = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const budgets = await handleGetBudgets(decoded._id);
    res.json({
        budgets
    });
});