import { Router } from "express";
import { validateAuth } from "../../middlewares/validateAuth.js";
import { validate } from "../../middlewares/validate.js";
import { expenseItem } from "./expense.schema.js";
import { addExpense, deleteExpense, editExpense, getExpenses } from "./expense.controller.js";

export const expenseRouter = Router();

expenseRouter.post('/new-expenses', validateAuth(), validate(expenseItem), addExpense);
expenseRouter.put('/edit-expenses', validateAuth(), validate(expenseItem), editExpense);
expenseRouter.delete('/delete-expenses', validateAuth(), validate(expenseItem), deleteExpense);
expenseRouter.post('/get-expenses', validateAuth(), validate(expenseItem), getExpenses);
