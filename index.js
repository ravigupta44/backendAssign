const express = require('express');
const studentRoutes = require('./routes/students');
const libraryRoutes = require('./routes/libraryRoutes');
const sum_of_evens = require('./src/taskOne');


//for task1
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum_of_evens(numbers));  



const app = express();
const PORT = 4000;

app.use(express.json());


app.use(studentRoutes);
app.use('/library', libraryRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// Add a Book: POST http://localhost:3000/library/add-book
// List Books: GET http://localhost:3000/library/list-books
// Remove a Book: DELETE http://localhost:3000/library/remove-book/:isbn





// http://localhost:3000/sort-students