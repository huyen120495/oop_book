const knex = require('knex') ({
    client : 'mysql',
    connection : {
        host : '127.0.0.1',
        user : 'root',
        password : 'huyen123',
        database : 'book'
    }
});

module.exports = knex;
