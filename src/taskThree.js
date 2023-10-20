

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    display() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    add_book(book) {
        this.books.push(book);
    }

    remove_book(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    list_books() {
        return this.books.map(book => book.display());
    }
}

module.exports = { Book, Library };
