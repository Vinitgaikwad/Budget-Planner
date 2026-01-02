import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, minLength: 8, maxLength: 12 }
});

export default mongoose.model('user', UserSchema);