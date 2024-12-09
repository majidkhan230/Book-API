import express from 'express'
import { createBookDetails, DeleteBookById, getAllBooks, updateBookById } from '../controllers/bookController.js';


export const bookRoutes = express.Router();



bookRoutes.get("/",getAllBooks)
bookRoutes.post("/",createBookDetails)
bookRoutes.put("/:id",updateBookById)
bookRoutes.delete("/:author",DeleteBookById)