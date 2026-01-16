import mongoose from "mongoose";
import { EXPENSE_TYPES } from "./expense.enum.js";
import { TIME_TYPES } from "../../types/time.js";

const expenseSchema = new mongoose.Schema({
    uid: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    expenses: [
        {
            expense_type: { type: String, enum: EXPENSE_TYPES, required: true },
            amount: { type: Number, required: true },
            date: { type: mongoose.Schema.Types.Date, required: true },
            time: { type: String, enum: TIME_TYPES, default: TIME_TYPES[0], required: true }
        }
    ]
},
    { timestamps: true }
);

expenseSchema.index({ uid: 1 }, { unique: true });

export const expenseModel = mongoose.model("expense", expenseSchema);