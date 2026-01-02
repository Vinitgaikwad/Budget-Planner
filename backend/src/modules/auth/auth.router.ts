import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { userDetailSchema } from "./auth.schema.js";
import { signInUser, signUpUser } from "./auth.controller.js";

export const authRouter = Router();

authRouter.post('/sign-up', validate(userDetailSchema), signUpUser);
authRouter.post('/sign-in', validate(userDetailSchema), signInUser);