import { AppError, ConflictError, DatabaseError, NotFoundError } from "../../errors/custom.errors.js";
import { budgetModel } from "./budget.model.js";
import type { BudgetItem } from "./budget.schema.js";

export async function handleAddBudget(budget: BudgetItem, uid: string) {
    try {
        const budgets = await budgetModel.findOneAndUpdate(
            {
                uid,
                "budgets.budget_type": { $ne: budget.budget_type }
            },
            {
                $setOnInsert: { uid },
                $push: {
                    budgets: {
                        budget_type: budget.budget_type,
                        amount: budget.amount,
                        date: new Date()
                    }
                }
            },
            {
                upsert: true,
                new: true
            }
        );

        if (!budgets) {
            throw new ConflictError("Budget Already Exists")
        }

        return budgets;
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError()
    }
}

export async function handleEditBudget(budget: BudgetItem, uid: string) {
    try {
        const budgets = await budgetModel.findOneAndUpdate(
            {
                uid,
                "budgets.budget_type": { $eq: budget.budget_type }
            },
            {
                $set: {
                    "budgets.$.amount": budget.amount,
                    "budgets.$.date": new Date()
                }
            },
            {
                new: true
            }
        );

        if (!budgets) {
            throw new NotFoundError("Budget Not Found");
        }

        return budgets
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}

export async function handleDeleteBudget(budget: BudgetItem, uid: string) {
    try {
        const budgets = await budgetModel.findOneAndUpdate(
            {
                uid,
                "budgets.budget_type": { $eq: budget.budget_type }
            },
            {
                $pull: {
                    budgets: { budget_type: budget.budget_type }
                }
            },
            {
                new: true
            }
        );

        if (!budgets) {
            throw new NotFoundError("Budget Not Found");
        }

        return budgets
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}

export async function handleGetBudgets(uid: string) {
    try {
        const budgets = await budgetModel.find({ uid });
        if (!budgets) {
            throw new NotFoundError("Not Budgets Found");
        }
        return budgets;
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}