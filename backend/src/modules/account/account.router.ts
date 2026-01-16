import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { validateAuth } from "../../middlewares/validateAuth.js";
import { accountItemSchema } from "./account.schema.js";
import { createAccounts, deleteAccounts, editAccounts, getAccounts } from "./account.controller.js";

export const accountRouter = Router();

accountRouter.post('/new', validateAuth(), validate(accountItemSchema), createAccounts);
accountRouter.put('/edit', validateAuth(), validate(accountItemSchema), editAccounts);
accountRouter.delete('/delete', validateAuth(), validate(accountItemSchema), deleteAccounts);
accountRouter.post('/get', validateAuth(), getAccounts);