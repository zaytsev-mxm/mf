import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3011;

const app = express();

app.use('/js', express.static('dist/js'));
app.use('/favicon.ico', express.static('public/favicon.ico'));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, (...args) => {
    console.log(`Server has been started on port [${PORT}]`);
});