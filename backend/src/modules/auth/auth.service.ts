import { type UserDetail } from "./auth.schema.js";
import UserModel from './auth.model.js'
import { AppError, AuthenticationError, ConflictError, DatabaseError } from "../../errors/custom.errors.js";
import { signToken } from "../utils/jwt.js";

export async function handleSignUp(details: UserDetail) {
    try {
        const findUser = await UserModel.findOne({ email: details.email });
        if (findUser) {
            throw new ConflictError("User Already Exist");
        }
        await new UserModel(details).save();

    } catch (error) {
        console.log(error);
        if (error instanceof AppError) {
            throw error;
        }

        if (error instanceof Error && error.name === 'ValidationError') {
            throw new DatabaseError("Invalid User Data Provided");
        }

        throw new DatabaseError("Failed to Create User");
    }
}

export async function handleSignIn(details: UserDetail) {
    try {
        const getUser = await UserModel.findOne(details);
        if (getUser) {
            return signToken({ email: getUser.email, _id: getUser._id.toString() })
        }
        throw new AuthenticationError("Invalid Credentials");
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError("Cannot fetch Credentials, Try again later")
    }
}

