import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
//dfsa
export default userRouter;
