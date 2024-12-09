import express from 'express'
import bookController from '../controllers/bookController/js';

const bookRoutes = express.Router();



bookRoutes.get("/",bookController.getAllBooks)
bookRoutes.post("/",bookController.createBookDetails)
bookRoutes.put("/:id",bookController.updateBookById)
bookRoutes.delete("/:author",bookController.DeleteBookById)


export default bookRoutes;