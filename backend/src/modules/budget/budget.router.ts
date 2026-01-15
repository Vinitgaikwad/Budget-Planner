import { Router } from "express";
import { validateAuth } from "../../middlewares/validateAuth.js";
import { validate } from "../../middlewares/validate.js";
import { budgetItem } from "./budget.schema.js";
import { addBudget, deleteBudget, editBudget, getBudgets } from "./budget.controller.js";

export const budgetRouter = Router();

budgetRouter.post('/new-budgets', validateAuth(), validate(budgetItem), addBudget);
budgetRouter.post('/edit-budgets', validateAuth(), validate(budgetItem), editBudget);
budgetRouter.post('/delete-budgets', validateAuth(), validate(budgetItem), deleteBudget);
budgetRouter.post('/get-budgets', validateAuth(), validate(budgetItem), getBudgets);