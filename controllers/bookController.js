import { bookList } from "../data/bookList.js";

export const getAllBooks = (req, res) => {
  try {
    res.status(200).json({
      message: "welcome to all books file",
      books: bookList,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with server",
      error: error.message,
    });
  }
};
export const createBookDetails = (req, res) => {
  try {
    const book = req.body;
    bookList.push(book);
    res.status(201).send({ message: "sucessfully created", books: bookList });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with server",
      error: error.message,
    });
  }
};
export const updateBookById = (req, res) => {
  try {
    const id = req.params.id;

  const filterById=  bookList.find((item)=>{
      item.id == parseInt(id)
    })

    res.status(200).json({
      message: "welcome to all books file",
      book:filterById,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with server",
      error: error.message,
    });
  }
};
export const DeleteBookById = (req, res) => {
  

};
