import express from 'express'
import dotenv from "dotenv"
import { userRouter } from './routes/userRoutes.js';
import { bookRoutes } from './routes/bookRoutes.js';
export const app =  express();



dotenv.config();
app.use(express.json())





app.get("/",(req,res)=>{
    res.send("welcome to home")
})

app.use("/users",userRouter)
app.use("/books",bookRoutes)


const PORT =  process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is sucessfully running on ${PORT}`)
})