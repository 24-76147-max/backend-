import * as bookservice from " . ./services/bookService.js";

export const fetchAllBooks = async (req, res ) =>{
    const books = await bookService.fetchAllBooks();
    res.stsatus(200).json(books);
}