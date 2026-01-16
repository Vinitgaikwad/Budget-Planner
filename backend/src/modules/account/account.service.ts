import { AppError, ConflictError, DatabaseError, NotFoundError } from "../../errors/custom.errors.js";
import { consoleError } from "../tests/consoleError.js";
import accountModel from "./account.model.js";
import type { AccountItem } from "./account.schema.js";

export async function handleAddAccount(account: AccountItem, uid: string) {
    try {
        const result = await accountModel.findOneAndUpdate(
            {
                uid: uid,
                "accounts.acc_type": { $ne: account.acc_type }
            },
            {
                $setOnInsert: { uid },
                $push: { accounts: { acc_type: account.acc_type, date: new Date(), amount: account.amount, time: account.time } }
            },
            {
                upsert: true,
                new: true
            }
        );

        if (!result) {
            throw new ConflictError("Account Already Exist");
        }
        return result;
    } catch (error) {
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}

export async function handleEditAccount(account: AccountItem, uid: string) {
    try {
        const result = await accountModel.findOneAndUpdate(
            {
                uid: uid,
                "accounts.acc_type": { $eq: account.acc_type }
            },
            {
                $set: {
                    "accounts.$.amount": account.amount,
                    "accounts.$.date": new Date(),
                    "accounts.$.time": account.time
                }
            },
            {
                new: true
            }
        );

        if (!result) {
            throw new NotFoundError("Account Not Found");
        }

        return result;
    } catch (error) {
        consoleError(error);
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}

export async function handleDeleteAccount(account: AccountItem, uid: string) {
    try {
        const result = await accountModel.findOneAndUpdate(
            { uid },
            {
                $pull: {
                    accounts: { acc_type: account.acc_type }
                }
            },
            { new: true }
        );

        if (!result) {
            throw new NotFoundError("Account not found");
        }

        return result;
    } catch (error) {
        consoleError(error);
        if (error instanceof AppError) throw error;
        throw new DatabaseError();
    }
}


export async function handleGetAccounts(uid: string) {
    try {
        const result = await accountModel.findOne({ uid: uid });

        if (!result) {
            throw new NotFoundError("No Accounts Found, Add Accounts");
        }
        return result
    } catch (error) {
        consoleError(error);
        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError();
    }
}