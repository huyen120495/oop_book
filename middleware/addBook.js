const Book = require('../book');

function addBook(request, reseponse, next) {
    let book = new Book(request.body.title, request.body.author);
    book.setId(request.body.id);
    book.setPublisher(request.body.publisher);
    book.setPrice(request.body.price);
    request.body.book = book;

    next();
}

module.exports = addBook;
