import mongoose, { Schema } from "mongoose";
import { ACCOUNT_Roles } from "./account.enum.js";
import { TIME_TYPES } from "../../types/time.js";

const AccountSchema = new mongoose.Schema({
    uid: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    accounts: [
        {
            acc_type: { type: String, enum: ACCOUNT_Roles, required: true },
            date: { type: Schema.Types.Date, required: true },
            amount: { type: Number, default: 0, required: true },
            time: { type: String, enum: TIME_TYPES, default: TIME_TYPES[0], required: true }
        }
    ]
},
    { timestamps: true }
);
AccountSchema.index({ uid: 1 }, { unique: true });

export default mongoose.model("account", AccountSchema);