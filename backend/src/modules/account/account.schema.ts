import zod from "zod"
import { ACCOUNT_Roles } from "./account.enum.js";

export const accountItemSchema = zod.object({
    acc_type: zod.enum(ACCOUNT_Roles),
    date: zod.coerce.date().optional(),
    amount: zod.number().int().positive()
});

export const accountSchema = zod.object({
    uid: zod.string(),
    accounts: zod.array(accountItemSchema)
});

export type AccountItem = zod.infer<typeof accountItemSchema>
export type Accounts = zod.infer<typeof accountSchema>

/*
{
    uid: "",
    accounts: [
        {
            type of account: enum.role,
            date added: date(),
            amount added: number
        },
        ...
    ]
}
*/