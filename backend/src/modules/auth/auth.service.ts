import { type UserDetail } from "./auth.schema.js";
import UserModel from './auth.model.js'
import { AppError, AuthenticationError, ConflictError, DatabaseError } from "../../errors/custom.errors.js";
import { signToken } from "../utils/jwt.js";
import { hashPassword, verifyPassword } from "../utils/password.js";

export async function handleSignUp(details: UserDetail) {
    try {
        const findUser = await UserModel.findOne({ email: details.email });
        if (findUser) {
            throw new ConflictError("User Already Exist");
        }
        const hash = await hashPassword(details.password);
        await new UserModel({ email: details.email, password: hash }).save();

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
        const getUser = await UserModel.findOne({ email: details.email });
        if (!getUser) {
            throw new AuthenticationError("Invalid Credentials");
        }
        const checkPassword = await verifyPassword(details.password, getUser.password || "");
        if (!checkPassword) {
            throw new AuthenticationError("Username or Password is Incorrect")
        }
        return signToken({ email: getUser.email, _id: getUser._id.toString() })
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError("Cannot fetch Credentials, Try again later")
    }
}

