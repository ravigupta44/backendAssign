const express = require('express');
const { Book, Library } = require('../src/taskThree.js');

const router = express.Router();
const library = new Library();

router.post('/add-book', (req, res) => {
    const { title, author, isbn } = req.body;
    const book = new Book(title, author, isbn);
    library.add_book(book);
    res.json({ message: 'Book added successfully!' });
});

router.delete('/remove-book/:isbn', (req, res) => {
    library.remove_book(req.params.isbn);
    res.json({ message: 'Book removed successfully!' });
});

router.get('/list-books', (req, res) => {
    const books = library.list_books();
    res.json({ books });
});

module.exports = router;
