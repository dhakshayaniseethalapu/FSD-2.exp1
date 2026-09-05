const express = require('express');
const app = express();

app.use(express.json());

// In-memory books array
let books = [
    { id: 1, title: "Python Basics", author: "John" },
    { id: 2, title: "Node.js Guide", author: "David" }
];

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET book by ID
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
});

// POST a new book
app.post('/books', (req, res) => {
    console.log("Body received:", req.body);

    const { title, author } = req.body;

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});
// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books.splice(index, 1);

    res.json({
        message: "Book deleted successfully"
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});