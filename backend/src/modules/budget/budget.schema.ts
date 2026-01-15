import zod from "zod";
import { BUDGET_TYPES } from "./budget.enum.js";

export const budgetItem = zod.object({
    budget_type: zod.enum(BUDGET_TYPES),
    amount: zod.number().int().positive(),
    date: zod.date().optional()
});

const budgetsSchema = zod.object({
    uid: zod.string(),
    budgets: zod.array(budgetItem)
});

export type BudgetItem = zod.infer<typeof budgetItem>
export type Budgets = zod.infer<typeof budgetsSchema>