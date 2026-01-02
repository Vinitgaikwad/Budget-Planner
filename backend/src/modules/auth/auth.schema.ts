import zod, { email } from 'zod'

export const userDetailSchema = zod.object({
    email: zod.email(),
    password: zod.string().max(12).min(8).regex(/[A-Z]/, "Must contain an uppercase letter").regex(/[a-z]/, "Must contain a lowercase letter").regex(/\d/, "Must contain a number").regex(/[@$!%*?&#]/, "Must contain a special character")
});

export const tokenPayloadSchema = zod.object({
    _id: zod.string(),
    email: zod.email()
});

export type UserDetail = zod.infer<typeof userDetailSchema>
export type TokenDetail = zod.infer<typeof tokenPayloadSchema>