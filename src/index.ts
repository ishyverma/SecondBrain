import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "./db";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express()
app.use(express.json())

dotenv.config()

const connectMongo = async () => {
    await mongoose.connect(`${process.env.MONGO_URL}/SecondBrain`)
    console.log('Database Connected')
}
connectMongo()

app.post("/api/v1/signup", async (req, res) => {
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 5)
    try {
        const user = await userModel.create({ username, password: hashedPassword })
        res.json({
            Message: 'User is signed up'
        })
    } catch (err) {
        console.log('Error Creating User: ', err)
        res.status(411).json({
            ErrorMessage: 'User is registered'
        })
    }
})

app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await userModel.findOne({ username })
        
    } catch (err) {
        console.log('User Not Found: ', err)
    }
})

app.post("/api/v1/content", (req, res) => {

})

app.get("/api/v1/content", (req, res) => {

})

app.delete("/api/v1/content", (req, res) => {

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(process.env.PORT)