import mongoose, { Schema } from "mongoose";

const booksSchema = new Schema(
  {
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    type: {
      type: String,
      enum: ["fiction", "non-fiction"],
    },
    available: {
      type: Boolean,
    },
    // _id:{
    //     type:String,
    //     required:true,
    // }
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", booksSchema);
