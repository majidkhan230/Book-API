import bookList from "../data/bookList.js";



// getALLBooks
  const getAllBooks = (req, res) => {
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
//getBookByID
const getBookByID = (req,res)=>{
  try {
    const id = req.params.id;

  const filterById=  bookList.find((item)=>(
      item.id == id
   ) )
console.log(filterById)
    res.status(200).json({
      message: "book filter by id",
      book:filterById,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with server",
      error: error.message,
    });
  }
  
}

 const createBookDetails = (req, res) => {
   const book = req.body;
  try {
    bookList.push(book);
    res.status(201).send({ message: "sucessfully created", books: bookList });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with server",
      error: error.message,
    });
  }
  
};

// UpdateByID
 const updateBookById = (req, res) => {
   try {
     const id = req.params.id;
    const bookIndex = bookList.findIndex((item)=>(  item.id ==  id))
    if (bookIndex === -1) {
      return res.status(404).json({ message: "Book not found" });
    }
    bookList[bookIndex] = {...bookList[bookIndex],...req.body}
    res.status(200).json({
      message: "welcome to all books file",
      book:bookList,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with server",
      error: error.message,
    });
  }
};





 const DeleteBookById = (req, res) => {
  try {
  const id = req.params.id
   const bookIndex = bookList.findIndex((item)=>(item.id == id))
   if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
   bookList.splice(bookIndex,1)
res.status(200).json(bookList)
 } catch (error) {
   res.status(500).json({
     message: "something went wrong with server",
     error: error.message,
   });
 }
  

};


const bookController = {getAllBooks,createBookDetails,updateBookById,DeleteBookById,getBookByID}

export default bookController;