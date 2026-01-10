import { AppError, DatabaseError, ValidationError } from "../../errors/custom.errors.js";
import type { AccountItem, Accounts } from "./account.schema.js";
import accountModel from "./account.model.js";
import { consoleError } from "../tests/consoleError.js";

export async function handleNewAccounts(accounts: AccountItem[], uid: string) {
    try {
        if (accounts.length == 0 || !uid) {
            throw new ValidationError("Invaild Data Entries")
        }

        const newAccounts = new accountModel({
            uid,
            accounts: accounts.map((account) => {
                return {
                    acc_type: account.acc_type,
                    date: Date(),
                    amount: account.amount
                }
            })
        });

        await newAccounts.save();
    } catch (error) {
        consoleError(error);

        if (error instanceof AppError) {
            throw error
        }

        throw new DatabaseError("Internal Error Occured");
    }
}

export async function handleEditAccount(account: AccountItem) {

}
/*
    add in account, edit the account
*/