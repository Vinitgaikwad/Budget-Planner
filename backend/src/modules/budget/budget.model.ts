import mongoose from "mongoose";
import { BUDGET_TYPES } from "./budget.enum.js";

const budgetSchema = new mongoose.Schema({
    uid: { type: mongoose.Schema.Types.ObjectId, required: true },
    budgets: [
        {
            budget_type: { type: String, enum: BUDGET_TYPES, required: true },
            amount: { type: Number, required: true },
            date: { type: mongoose.Schema.Types.Date, required: true }
        }
    ]
});

budgetSchema.index({ uid: 1 }, { unique: true });

export const budgetModel = mongoose.model('budget', budgetSchema);