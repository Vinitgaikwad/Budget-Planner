import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { validateAuth } from "../../middlewares/validateAuth.js";
import { accountItemSchema } from "./account.schema.js";
import { createAccounts, deleteAccounts, editAccounts, getAccounts } from "./account.controller.js";

export const accountRouter = Router();

accountRouter.post('/new-accounts', validateAuth(), validate(accountItemSchema), createAccounts);
accountRouter.put('/edit-accounts', validateAuth(), validate(accountItemSchema), editAccounts);
accountRouter.delete('/delete-accounts', validateAuth(), validate(accountItemSchema), deleteAccounts);
accountRouter.post('/get-accounts', validateAuth(), getAccounts);