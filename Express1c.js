const express = require('express');
const app = express();
// Middleware
app.use((req, res, next) => {
    console.log('Middleware Executed');
    next();
});
// Route
app.get('/', (req, res) => {
    res.send('Welcome to Express Middleware');
});
// Server
app.listen(3000, () => {
    console.log('Server running on port http://localhost:3000');
});
