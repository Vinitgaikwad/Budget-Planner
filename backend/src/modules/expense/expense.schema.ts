import zod from "zod"
import { EXPENSE_TYPES } from "./expense.enum.js";
import { TIME_TYPES } from "../../types/time.js";

export const expenseItem = zod.object({
    expense_type: zod.enum(EXPENSE_TYPES),
    amount: zod.number().int().positive(),
    date: zod.date().optional(),
    time: zod.enum(TIME_TYPES).optional()
});

export const expensesSchema = zod.object({
    uid: zod.string(),
    expenses: zod.array(expenseItem)
});

export type ExpenseItem = zod.infer<typeof expenseItem>
export type Expenses = zod.infer<typeof expensesSchema>