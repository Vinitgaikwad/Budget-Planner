export const TIME_TYPES = ["monthly", "yearly", "daily", "oneTime"] as const;
export type TimeTypes = typeof TIME_TYPES[number];