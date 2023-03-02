import express, { json, NextFunction, Request, Response } from "express";
import router from "./routes/product";
import cors from 'cors'
import userRouter from "./routes/user";

const app = express()
app.use(json())
app.use(cors())

app.use('/product', router);
app.use('/user', userRouter);

app.use((err:Error, req: Request, res: Response, next:NextFunction)=>{
    res.json({message: err.message})
})
app.listen(4000, ()=>{
    console.log("Server listening")
})