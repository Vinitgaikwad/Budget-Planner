import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { validateAuth } from "../../middlewares/validateAuth.js";

const accountRouter = Router();

// accountRouter.post('/new-accounts', validateAuth, validate())