const bookRepository = require('./book-repository');
const connection = require('./connection');
const Book = require('./book');

const bookrepo = new bookRepository(connection);

let book = new Book('tieu de','tac gia');

bookrepo.save(book).then(function(){
    console.log("ok");
});

bookrepo.delete(30).then(() => {
    console.log('ok');
}, () => {
    console.log('fail');
});