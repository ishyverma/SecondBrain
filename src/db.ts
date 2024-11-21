import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, unique: true },
    password: String
})

export const userModel = mongoose.model('User', userSchema)