import mongoose from "mongoose";
import { EXPENSE_TYPES } from "./expense.enum.js";

const expenseSchema = new mongoose.Schema({
    uid: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    expenses: [
        {
            expense_type: { type: String, enum: EXPENSE_TYPES, required: true },
            amount: { type: Number, required: true },
            date: { type: mongoose.Schema.Types.Date, required: true }
        }
    ]
},
    { timestamps: true }
);

expenseSchema.index({ uid: 1 }, { unique: true });

export const expenseModel = mongoose.model("expense", expenseSchema);