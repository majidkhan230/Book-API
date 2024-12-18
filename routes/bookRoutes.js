import express from 'express'
import bookController from '../controllers/bookController.js';

const bookRoutes = express.Router();



bookRoutes.get("/",bookController.getAllBooks)
bookRoutes.get("/:id",bookController.getBookByID)
bookRoutes.post("/",bookController.createBookDetails)
bookRoutes.put("/:id",bookController.updateBookById)
bookRoutes.delete("/:id",bookController.DeleteBookById)


export default bookRoutes;