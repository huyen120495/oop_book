const express = require('express');
const router = express.Router();
const middleware = require('./middleware');
const Book = require('./book');

let check = [
    middleware.checkAuthorLength, 
    middleware.checkAuthorNull, 
    middleware.checkTitleLength, 
    middleware.checkTitleNull
    ];

router.get('/', function(request, response) {
    response.send('hello...');
});

router.get('/books', middleware.listAll);

router.get('/book/:id', middleware.search);

router.post('/book',check ,middleware.addBook, middleware.create);

router.put('/book', check, middleware.addBook, middleware.edit);

router.delete('/book', middleware.delete)

module.exports = router;
