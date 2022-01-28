const path = require('path');
const express = require('express');

const PORT = 3011;

const app = express();

app.use('/js', express.static('dist/js'));
app.use('/favicon.ico', express.static('public/favicon.ico'));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, (...args) => {
    console.log(`Server has been started on port [${PORT}]`);
});