export const ACCOUNT_Roles = ["cash", "debit", "savings", "other"] as const;
export type AccountRole = typeof ACCOUNT_Roles[number];