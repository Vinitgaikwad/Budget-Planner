import type { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.js";
import { handleAddExpense, handleDeleteExpense, handleGetExpenses } from "./expense.service.js";

export const addExpense = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;

    const expenses = await handleAddExpense(body, decoded._id);
    res.status(200).json({
        message: "Expense Created",
        expenses
    });
});

export const editExpense = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;

    const expenses = await handleDeleteExpense(body, decoded._id);
    res.status(200).json({
        message: "Expense Edited",
        expenses
    });
});

export const deleteExpense = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;
    const body = req.body;

    const expenses = await handleDeleteExpense(body, decoded._id);
    res.status(200).json({
        message: "Expense Deleted",
        expenses
    });
});

export const getExpenses = asyncHandler(async (req: Request, res: Response) => {
    const decoded = (req as any).auth;

    const expenses = await handleGetExpenses(decoded._id);
    res.status(200).json({
        expenses
    });
});