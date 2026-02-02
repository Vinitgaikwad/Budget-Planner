export const EXPENSE_TYPES = [
    "groceries",
    "rent",
    "electricity",
    "water",
    "gas",
    "internet",
    "mobile",
    "transport",
    "insurance",
    "medical",
    "fees",
    "loan",
    "credit_card",
    "savings",
    "investment",
    "entertainment",
    "dining",
    "shopping",
    "travel",
    "subscriptions",
    "gifts",
    "repairs",
    "emergency",
    "other"
] as const;

export type ExpenseTypes = typeof EXPENSE_TYPES[number];
