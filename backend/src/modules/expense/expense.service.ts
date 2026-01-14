import { AppError, ConflictError, DatabaseError, NotFoundError } from "../../errors/custom.errors.js";
import { expenseModel } from "./expense.model.js";
import type { ExpenseItem } from "./expense.schema.js";

export async function handleAddExpense(expense: ExpenseItem, uid: string) {
    try {
        const expenses = await expenseModel.findOneAndUpdate(
            {
                uid,
                "expenses.expense_type": { $ne: expense.expense_type }
            },
            {
                $setOnInsert: {
                    uid: uid
                },
                $push: {
                    expenses: { expense_type: expense.expense_type, amount: expense.amount, date: new Date() }
                }
            },
            {
                upsert: true,
                new: true
            }
        );

        if (!expenses) {
            throw new ConflictError("Expense Already Exists");
        }

        return expenses;
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}

export async function handleEditExpense(expense: ExpenseItem, uid: string) {
    try {
        const expenses = await expenseModel.findOneAndUpdate(
            {
                uid,
                "expenses.expense_type": { $eq: expense.expense_type }
            },
            {
                $set: {
                    "expenses.$.amount": expense.amount,
                    "expenses.$.date": new Date()
                }
            },
            {
                new: true
            }
        );


        if (!expenses) {
            throw new NotFoundError("Expense Not Found");
        }

        return expenses;
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}

export async function handleDeleteExpense(expense: ExpenseItem, uid: string) {
    try {
        const expenses = await expenseModel.findOneAndUpdate(
            {
                uid,
                "expenses.expense_type": { $eq: expense.expense_type }
            },
            {
                $pull: {
                    expenses: { expense_type: expense.expense_type }
                }
            },
            {
                new: true
            }
        );

        if (!expenses) {
            throw new NotFoundError("Expense Not Found");
        }

        return expenses;
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}

export async function handleGetExpenses(uid: string) {
    try {
        const expenses = await expenseModel.find({ uid });
        if (!expenses) {
            throw new NotFoundError("No Expenses Found, Add Expenses");
        }
        return expenses;
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}