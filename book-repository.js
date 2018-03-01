class BookRepository {
    /**
     * 
     * @param {*} connection 
     */
    constructor(connection) {
        this.connection = connection;
    }
    /**
     * 
     * @param {Book} book
     * @returns {Promise<void>}
     */
    save(book) {
        return book.getId() ? 
            this.connection('book').update({
                title : book.getTitle(),
                author : book.getAuthor(),
                publisher : book.getPublisher(),
                price : book.getPrice()
            }).where({
                id : book.getId()
            }) :
            this.connection('book').insert({
                title : book.getTitle(),
                author : book.getAuthor(),
                publisher : book.getPublisher(),
                price : book.getPrice()
            });
    }

    /**
     * 
     * @param {int} id
     * @returns {Promise<void>}
     */
    delete(id) {
        return this.connection('book').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        });
    }

    /**
     * @returns {Promise<Book[]>}
    */
    all() {
        return this.connection('book').select().where({
            deleted_at : null
        });
    }

    /**
     * @param {int} id
     * @returns {Promise<Book>} 
     */
    search(id) {
        return this.connection('book').select().where({
            id : id,
            deleted_at : null
        });
    }
}

module.exports = BookRepository;
