const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const BookRepository = require('./book-repository');
const connection = require('./connection');

app.set('repository', new BookRepository(connection));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended' : true}));
app.use(router);

app.listen(3000, function() {
    console.log('server listen port 3000.....');
});