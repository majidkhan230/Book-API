import mongoose, { Schema } from "mongoose";

const booksSchema = new Schema({},{timestamps:true})



export const Book = mongoose.model("Book",booksSchema)