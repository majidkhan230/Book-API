import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import mongoose from "mongoose";
const app = express();

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to home");
});

app.use("/users", userRouter);
app.use("/books", bookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is sucessfully running on ${PORT}`);
});

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(()=>(console.log("connection sucessfully established")))
  .catch((error)=>({message:"failed to connect to db",error:error.message})));
