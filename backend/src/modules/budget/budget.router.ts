import { Router } from "express";
import { validateAuth } from "../../middlewares/validateAuth.js";
import { validate } from "../../middlewares/validate.js";
import { budgetItem } from "./budget.schema.js";
import { addBudget, deleteBudget, editBudget, getBudgets } from "./budget.controller.js";

export const budgetRouter = Router();

budgetRouter.post('/new', validateAuth(), validate(budgetItem), addBudget);
budgetRouter.put('/edit', validateAuth(), validate(budgetItem), editBudget);
budgetRouter.delete('/delete', validateAuth(), validate(budgetItem), deleteBudget);
budgetRouter.post('/get', validateAuth(), validate(budgetItem), getBudgets);